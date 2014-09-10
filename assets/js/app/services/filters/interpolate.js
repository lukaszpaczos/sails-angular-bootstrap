'use strict';

/* Test Filter */

angular.module('app').filter('interpolate', [
    'version',
    function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }
]);
