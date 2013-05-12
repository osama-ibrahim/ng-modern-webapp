define(function(require) {
    'use strict';

    var _ = require('underscore'),
        app = require('app');

    require('services/contacts');
    require('services/groups');

    var ContactCtrl =
        ['$scope', '$stateParams', '$location', 'Contacts', 'Groups',
        function($scope, $stateParams, $location, Contacts, Groups) {

            if ($stateParams.contactId) {
                $scope.contact = Contacts.get($stateParams.contactId);
            } else {
                $scope.contact = {};
            }

            $scope.groups = Groups.get();

            _.each($scope.groups, function(grp) {
                if ($scope.contact && $scope.contact.groups) {
                    var grp2 = _.find($scope.contact.groups, function(g) { return g.id === grp.id; });

                    if (grp2) {
                        grp.selected = grp2.selected;
                    }
                }
            });

            $scope.$watch('groups', function() {
                $scope.contact.groups = _.filter($scope.groups, function(grp) {
                    return grp.selected;
                });
            }, true);

            $scope.save = function() {
                $scope.contact = Contacts[$scope.contact.id ? 'update' : 'create']($scope.contact);

                $location.path('/contacts/' + $scope.contact.id + '/edit');
            };

            $scope.remove = function() {
                Contacts.destroy($scope.contact);
                $location.path('/contacts');
            };
        }];

    app.contactsApp.controller('ContactCtrl', ContactCtrl);

    return ContactCtrl;
});
