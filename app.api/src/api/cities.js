import { wrapError } from 'ew-internals';
import cities from '../data/cities';

export default app => {
    app.get(
        '/cities',
        wrapError(async (req, res) => {
            res.status(200)
                .header('Content-Type', 'application/json')
                .send(JSON.stringify(cities));
        }),
    );
};
