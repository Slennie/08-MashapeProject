(function() {
    'use strict';
    angular
        .module('hashtag-finder')
        .factory('giphyFactory', giphyFactory);
    giphyFactory.$inject = ['$http'];

    function giphyFactory($http) {
        var service = {
            findGiphy: findGiphy
        };
        return service;
        ////////////
        function findGiphy(input) {
            return $http.get('https://giphy.p.mashape.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + input, {
                headers: {
                    'X-Mashape-Key': 'pJ5kM89GnHmshj9H1K21ltAHwPE6p1oacK4jsn9tzQPCyID36v'
                }
            });
        }
    }
})();
