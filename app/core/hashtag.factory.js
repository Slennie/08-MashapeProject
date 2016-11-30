(function() {
    'use strict';
    angular
        .module('hashtag-finder')
        .factory('hashtagFactory', hashtagFactory);
    hashtagFactory.$inject = ['$http'];

    function hashtagFactory($http) {
        var service = {
            findHashtag: findHashtag
        };
        return service;
        ////////////
        function findHashtag(input) {
            return $http.get('https://tagdef.p.mashape.com/' + input + '.json', {
                headers: {
                    'X-Mashape-Key': 'pJ5kM89GnHmshj9H1K21ltAHwPE6p1oacK4jsn9tzQPCyID36v'
                }
            });
        }
    }
})();
