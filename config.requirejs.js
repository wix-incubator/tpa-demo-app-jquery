/*eslint-disable */
requirejs.config({
    baseUrl: '/dist',
    paths: {
        lodash: '/node_modules/lodash/index',
        jquery: '/node_modules/jquery/dist/jquery',
        React: '/node_modules/react/dist/react-with-addons',
        mustache: '/node_modules/mustache/mustache',
        Wix: '//static.parastorage.com/services/js-sdk/1.61.0/js/wix.min',
        UI: '/node_modules/editor-ui-lib/lib/ui-lib-jquery'
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
