import { wrapError } from 'ew-internals';
import countries from '../data/countries';

export default app => {
    app.get(
        '/countries',
        wrapError(async (req, res) => {
            return res
                .status(200)
                .header('Content-Type', 'application/json')
                .send(JSON.stringify(countries));
        }),
    );
};
