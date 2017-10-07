import jwt from 'jsonwebtoken';
import { Users } from './../models';

const secret = process.env.SECRET || 'AGU NECHE MBA';

class Authentication {
    verifyToken(req, res, next) {
        const token = req.headers.authorization || req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({ message: 'Unauthorized! Login required' });
        }

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Invalid login credentials' });
            }
            req.decoded = decoded;
            next();
        })
    }

    verifyAdmin() {
        Users.findById(req.decoded.userId)
            .then((user) => {
            if (user.admin) {
                next();
            } else {
                return res.status(403).send({ message: 'Access forbidden, you are not an admin!' });
            }
            });
    }
}

export default new Authentication;
