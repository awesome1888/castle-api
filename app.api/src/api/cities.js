import { wrapError } from 'ew-internals';
import cities from '../data/cities';

export default app => {
    app.get(
        '/cities',
        wrapError(async (req, res) => {
            return res
                .status(200)
                .header('Content-Type', 'application/json')
                .send(JSON.stringify(cities));
        }),
    );
    app.get(
        '/cities/:id',
        wrapError(async (req, res) => {
            const id = parseInt(req.params.id, 10);
            if (Number.isNaN(id)) {
                return res.status(400).send();
            }

            res.status(200)
                .header('Content-Type', 'application/json')
                .send(JSON.stringify(cities.find(city => city.id === id)));
        }),
    );
};
