require.config({
    paths: {
        text: '../components/requirejs-text/text',
        jquery: '../components/jquery/jquery',
        angular: '../components/angular/angular',
        underscore: '../components/underscore-amd/underscore',
        'bootstrap-affix': '../components/sass-bootstrap/js/bootstrap-affix',
        'bootstrap-collapse': '../components/sass-bootstrap/js/bootstrap-collapse',
        'bootstrap-dropdown': '../components/sass-bootstrap/js/bootstrap-dropdown',
        'angular-resource': '../components/angular-resource/angular-resource',
        'ui.jq': '../components/angular-ui-utils/modules/jq/jq',
        'ui.if': '../components/angular-ui-utils/modules/if/if',
        'angular-ui-states': '../components/angular-ui-router/build/angular-ui-states'
    },
    shim: {
        'bootstrap-affix': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'bootstrap-collapse': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'bootstrap-dropdown': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angular'
        },
        'ui.jq': {
            deps: ['angular'],
            exports: 'angular'
        },
        'ui.if': {
            deps: ['angular'],
            exports: 'angular'
        },
        'angular-ui-states': {
            deps: ['angular'],
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'router', 'bootstrap-affix', 'bootstrap-collapse', 'bootstrap-dropdown'], function (angular, app) {
    'use strict';

    app.init();
});
