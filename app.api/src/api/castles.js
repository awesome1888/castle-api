import { wrapError } from 'ew-internals';
import castles from '../data/castles';

export default app => {
    app.get(
        '/castles',
        wrapError(async (req, res) => {
            return res
                .status(200)
                .header('Content-Type', 'application/json')
                .send(JSON.stringify(castles));
        }),
    );
    app.get(
        '/castles/:id',
        wrapError(async (req, res) => {
            const id = parseInt(req.params.id, 10);
            if (Number.isNaN(id)) {
                return res.status(400).send();
            }

            res.status(200)
                .header('Content-Type', 'application/json')
                .send(JSON.stringify(castles.find(castle => castle.id === id)));
        }),
    );
};
