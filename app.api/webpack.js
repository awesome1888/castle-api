const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env, argv) => {
    env = env || {};
    const development =
        argv.mode === 'development' || env.NODE_ENV === 'development';

    const debuggerPort = process.env.NETWORK__PORT__DEBUGGER || 3001;

    return {
        entry: path.join(__dirname, 'src/index.js'),
        target: 'node',
        node: {
            __filename: true,
            __dirname: true,
        },
        externals: [nodeExternals()],
        mode: development ? 'development' : 'production',
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, 'build'),
            filename: `index${development ? '-dev' : ''}.js`,
        },
        resolve: {
            extensions: ['.ts', '.js'],
            symlinks: false,
        },
        devtool: development ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/env',
                                        {
                                            targets: { node: '8.10' },
                                        },
                                    ],
                                ],
                                plugins: [
                                    '@babel/plugin-proposal-object-rest-spread',
                                ],
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(txt|html)$/,
                    use: 'raw-loader',
                },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                _: [path.join(__dirname, `src/lib/lodash.js`), 'default'],
                logger: ['ew-internals', 'logger'],
            }),
            new webpack.DefinePlugin({
                __DEV__: development,
                __TEST__: false,
            }),
            development &&
                new NodemonPlugin({
                    nodeArgs: development
                        ? [`--inspect=0.0.0.0:${debuggerPort}`]
                        : [],
                    watch: path.join(__dirname, 'build'),
                }),
        ].filter(x => !!x),
    };
};
