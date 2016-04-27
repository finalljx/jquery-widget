module.exports = {
    entry: {
        bundle: './src/index.js',
    },
    output: {
        filename: './dist/jquery-widget.js',
        pathinfo: true,
        libraryTarget: 'umd'
    },
    devtool: '#eval',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            },
            {
                test: /\.jsx$/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    'plugins': [
                        ['transform-react-jsx', {
                            'pragma': '$.widget.createElement'
                        }]
                    ]
                }
            }
        ]
    },
    eslint: {
        configFile: './eslint.json'
    }
};
