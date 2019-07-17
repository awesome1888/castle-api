import '@babel/polyfill';
import { Settings } from 'ew-internals';
import path from 'path';
import helmet from 'helmet';
import express from 'express';

import useErrorHandler from './lib/error-handler';
import useCORS from './lib/cors';

import useHomeAPI from './api/home';
import useCitiesAPI from './api/cities';

(async () => {
    const app = express();
    const settings = new Settings();

    useErrorHandler(app);

    const host = await settings.get('network.host', 'localhost');
    const port = process.env.PORT || (await settings.get('network.port', 3000));

    app.set('host', host);
    app.set('port', port);
    // app.set('query parser', query => {
    //   return qs.parse(query, { allowPrototypes: false, depth: 10 });
    // });

    useCORS(app, settings);

    app.use(express.static(path.join(process.cwd(), 'public')));
    app.use(helmet());
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );

    // const database = new Database({
    //   url: await settings.get('database.url', ''),
    // });
    // await database.connect();
    // if (__DEV__) {
    //   await database.migrate();
    // }

    // const intercom = new InterCom({
    //   url: await settings.get('intercom.url', ''),
    // });
    // await intercom.start();

    useHomeAPI(app);
    useCitiesAPI(app);

    app.listen({ port }, () => {
        logger.info(`🚀 API is ready at http://${host}:${port}`, !__TEST__);
    });
})();
