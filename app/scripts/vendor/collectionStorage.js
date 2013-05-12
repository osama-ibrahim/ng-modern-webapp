/* jshint bitwise: false */
define(function(require) {
    'use strict';

    var _ = require('underscore');

    function collectionStorage(name) {

        var guid = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        };

        function LocalStorage(name) {
            this.name = name;
            var store = localStorage.getItem(this.name);
            this.records = (store && store.split(',')) || [];
        }

        _.extend(LocalStorage.prototype, {
            get: function(id) {
                if (id) {
                    return JSON.parse(localStorage.getItem(this.name + '-' + id));
                }

                return _(this.records)
                    .chain()
                    .map(function(id){
                        return JSON.parse(localStorage.getItem(this.name + '-' + id));
                    }, this)
                    .compact()
                    .value();
            },

            save: function() {
                localStorage.setItem(this.name, this.records.join(','));
            },

            create: function(model) {
                if (!model.id) {
                    model.id = guid();
                }

                localStorage.setItem(this.name + '-' + model.id, JSON.stringify(model));
                this.records.push(model.id.toString());
                this.save();

                return this.get(model.id);
            },

            update: function(model) {
                localStorage.setItem(this.name + '-' + model.id, JSON.stringify(model));

                if (!_.include(this.records, model.id.toString())) {
                    this.records.push(model.id.toString());
                    this.save();
                }

                return this.get(model.id);
            },

            destroy: function(model) {
                if (!model.id) {
                    return false;
                }

                localStorage.removeItem(this.name + '-' + model.id);

                this.records = _.reject(this.records, function(id){
                    return id === model.id.toString();
                });

                this.save();
                return model;
            }
        });

        var storage = new LocalStorage(name);

        return function() {
            return storage;
        };
    }

    return collectionStorage;
});
