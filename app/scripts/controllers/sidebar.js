define(function(require) {
    'use strict';

    var _ = require('underscore'),
        app = require('app');

    require('services/contacts');
    require('services/groups');

    var SidebarCtrl =
        ['$scope', '$stateParams', 'Groups', 'Contacts',
        function($scope, $stateParams, Groups, Contacts) {

            $scope.affixOptions = {
                offset: {
                    bottom: 140
                }
            };

            $scope.selectedGroupId = $stateParams.groupId;

            $scope.groups = Groups.get();

            var contacts = Contacts.get();

            _.each($scope.groups, function(grp) {

                grp.count = 0;

                _.each(contacts, function(c) {
                    grp.count += (c.groups && _.any(c.groups, function(g) { return grp.id === g.id; })) ? 1 : 0;
                });
            });

            if (!$scope.groups.length) {
                Groups.create({ name: 'Family' });
                Groups.create({ name: 'Friends' });
                Groups.create({ name: 'Coworkers' });
            }
        }];

    app.contactsApp.controller('SidebarCtrl', SidebarCtrl);

    return SidebarCtrl;
});
