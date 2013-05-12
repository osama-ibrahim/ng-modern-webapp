define(function(require) {
    'use strict';

    var app = require('app'),
        contactTemplate = require('text!./views/contact.html'),
        contactsTemplate = require('text!./views/contacts.html'),
        navbarTemplate = require('text!./views/navbar.html'),
        sidebarTemplate = require('text!./views/sidebar.html'),
        ContactCtrl = require('controllers/contact'),
        ContactsCtrl = require('controllers/contacts'),
        SidebarCtrl = require('controllers/sidebar');

    var router = app.contactsApp
        .config(['$stateProvider', '$routeProvider', '$urlRouterProvider',
            function($stateProvider, $routeProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/contacts');

                var contactsViews = {
                    '': {
                        template: contactsTemplate,
                        controller: ContactsCtrl
                    },
                    'navbar': {
                        template: navbarTemplate
                    },
                    'sidebar': {
                        template: sidebarTemplate,
                        controller: SidebarCtrl
                    }

                };

                var contactViews = {
                    '': {
                        template: contactTemplate,
                        controller: ContactCtrl
                    },
                    'navbar': {
                        template: navbarTemplate
                    },
                    'sidebar': {
                        template: sidebarTemplate,
                        controller: SidebarCtrl
                    }
                };

                $stateProvider
                .state('contacts', {
                    url: '/contacts',
                    views: contactsViews
                })
                .state('groups', {
                    url: '/groups/:groupId',
                    views: contactsViews
                })
                .state('create', {
                    url: '/contacts/create',
                    views: contactViews
                })
                .state('edit', {
                    url: '/contacts/:contactId',
                    views: contactViews
                });
            }
        ]);

    return router;
});
