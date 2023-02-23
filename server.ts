import bodyParser from 'body-parser';
import { randomUUID } from 'crypto';
import fs from 'fs';
import jsonServer from 'json-server';
import auth from 'json-server-auth';
import jwt from 'jsonwebtoken';

interface Auth {
	email: string;
	password: string;
}

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const database = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
const router = jsonServer.router('./database.json');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(middlewares);

const addUuid = (req, res, next): void => {
	if (req.method === 'POST') {
		req.body.id = randomUUID();
	}
	next();
};

server.use(addUuid);

const rules = auth.rewriter({
	users: 600,
	privates: 600, //use a private route to authenticaded users
});

const SECRET_KEY = 'DEVELOP_SERVER:1.0.0';

const expiresIn = '1h';

function createToken(payload: Auth): string {
	return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isAuthenticated({ email, password }): boolean {
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
