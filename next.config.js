require('dotenv').config();
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    webpack: (config, { dev }) => {
        // Setup SASS
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'babel-loader',
                    'raw-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map(d => path.join(__dirname, d))
                                .map(g => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );

        // Setup environment variables
        config.plugins.push(new webpack.EnvironmentPlugin(process.env));

        return config;
    },
    exportPathMap: function () {
        // Setup static export mapping
        return {
            '/': { page: '/index' },
            '/robots.txt': { page: '/static/robots.txt'},
        };
    }
};
