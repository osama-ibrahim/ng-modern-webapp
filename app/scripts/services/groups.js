define(function(require) {
    'use strict';

    var collectionStorage = require('vendor/collectionStorage'),
        app = require('app');

    return app.contactsServices
        .factory('Groups', collectionStorage('GroupsCollection'));
});
