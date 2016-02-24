/*eslint-disable */
requirejs.config({
    baseUrl: '/src',
    paths: {
        text: '/node_modules/text/text',
        lodash: '/node_modules/lodash/index',
        jquery: '/node_modules/jquery/dist/jquery',
        React: '/node_modules/react/dist/react-with-addons',
        'Wix': '/lib/Wix-sdk/Wix',
        'UI': '/lib/editor-ui-lib/ui-lib-jquery'
    },
    map: {
        '*': {
            'react/addons': 'React',
            '$': 'jquery',
            '_': 'lodash'
        }
    },
    shim: {
        Wix: {exports: 'Wix'}
    }
});
