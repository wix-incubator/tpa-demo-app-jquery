var path = require('path');
var webpack = require('webpack');

var getPlugins = function() {
    var plugins = [];
    var noErrorsPlugin = new webpack.NoErrorsPlugin();
    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    });

    plugins.push(noErrorsPlugin);
    if (process.argv.indexOf('prd') > -1) {
        plugins.push(uglifyPlugin)
    }

    return plugins;
};

var webpackConfig = {
    entry: {
        settings: [
            'webpack-dev-server/client?http://localhost:5000',
            __dirname + '/src/settings/settings'
        ],
        widget: __dirname + '/src/widget/widget'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: getPlugins(),
    externals: {
        react: 'React',
        'react/addons': 'React',
        'react-dom': 'ReactDOM',
        lodash: '_',
        jquery: '$',
        Wix: 'Wix',
        'editor-ui-lib': 'UI'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.js?$/, loader: 'babel', include: path.join(__dirname, 'src')},
            {test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?functions=selector-parse&root=" + path.resolve('./js')}
        ]
    }
};

module.exports =  webpackConfig;