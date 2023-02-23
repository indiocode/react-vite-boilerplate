/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
const bodyParser = require('body-parser');
const { randomUUID } = require('crypto');
const fs = require('fs');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const database = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
const router = jsonServer.router('./database.json');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(middlewares);

const addUuid = (req, res, next) => {
	if (req.method === 'POST') {
		req.body.id = randomUUID();
	}
	next();
};

server.use(addUuid);

const rules = auth.rewriter({
	users: 600,
	'600/privates': '/privates', //use a private route to authenticaded users
});

const SECRET_KEY = 'DEVELOP_SERVER:1.0.0';

const expiresIn = '1h';

function createToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isAuthenticated({ email, password }) {
	return (
		database.users.findIndex(
			(user) => user.email === email && user.password === password,
		) !== -1
	);
}

server.post('/auth', (request, response) => {
	const { email, password } = request.body;

	if (!isAuthenticated({ email, password })) {
		return response.status(401).json({ message: 'Incorrect credentials' });
	}

	const token = createToken({ email, password });

	return response.status(200).json({ type: 'bearer', token });
});

server.use(auth);
server.use(rules);
server.use(router);

server.listen(3333, () => console.log('listening on port 3333'));
