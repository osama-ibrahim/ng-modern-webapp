define(function(require) {
    'use strict';

    var _ = require('underscore'),
        app = require('app');

    require('services/contacts');
    require('services/groups');

    var ContactsCtrl =
        ['$scope', '$stateParams', 'Contacts', 'Groups',
        function($scope, $stateParams, Contacts, Groups) {

            $scope.selectedGroupId = $stateParams.groupId;

            if ($scope.selectedGroupId) {
                $scope.selectedGroup = Groups.get($scope.selectedGroupId);
            }

            $scope.contacts = Contacts.get();

            $scope.filteredContacts = $scope.contacts;

            $scope.searchQuery = '';

            $scope.sortAttribute = '';

            $scope.sortReverse = false;

            $scope.$watch('[searchQuery, sortAttribute, sortReverse] | json', function() {
                var q = new RegExp($scope.searchQuery, 'g');

                var filtered = _.filter($scope.contacts, function(contact) {

                    var isInGroup =  !$scope.selectedGroupId ||
                        _.any(contact.groups, function(grp) {
                            return grp.id.toString() === $scope.selectedGroupId.toString();
                        });

                    return isInGroup && (q.test(contact.firstName) ||
                        q.test(contact.lastName) ||
                        q.test(contact.email) ||
                        q.test(contact.address) ||
                        q.test(contact.phoneNumber));
                });

                $scope.filteredContacts = _.sortBy(filtered, $scope.sortAttribute);

                if ($scope.sortReverse) {
                    $scope.filteredContacts.reverse();
                }
            });

            $scope.sortBy = function(attr) {
                if ($scope.sortAttribute === attr) {
                    $scope.sortReverse = !$scope.sortReverse;
                } else {
                    $scope.sortAttribute = attr;
                    $scope.sortReverse = false;
                }
            };
        }];

    app.contactsApp.controller('ContactsCtrl', ContactsCtrl);

    return ContactsCtrl;
});
