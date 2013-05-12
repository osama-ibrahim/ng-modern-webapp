define([
    'angular',
    'ui.jq',
    'ui.if',
    'angular-ui-states'
], function(angular) {
    'use strict';

    return {
        contactsServices: angular.module('contactsServices', []),
        contactsApp: angular.module('contactsApp', ['ui.jq', 'ui.if', 'ui.compat', 'contactsServices']),
        init: function() {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ['contactsApp']);
            });
        }
    };
});
