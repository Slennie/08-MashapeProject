(function() {
    'use strict';
    angular
        .module('hashtag-finder')
        .controller('HashtagController', HashtagController);
    HashtagController.$inject = ['hashtagFactory', 'giphyFactory'];
    /* @ngInject */
    function HashtagController(hashtagFactory, giphyFactory) {
        var vm = this;
        vm.findHashtag = findHashtag;
        vm.findGiphy = findGiphy;
        ////////////////
        function findHashtag(input) {
            hashtagFactory
                .findHashtag(input)
                .then(function(response) {
                    vm.results = response.data.defs;
                })
                .catch(function(error) {
                    alert('An error occured. Please try again.');
                });
        }

        function findGiphy(input) {
            giphyFactory
                .findGiphy(input)
                .then(function(response) {
                    vm.giphys = response.data.data;
                })
                .catch(function(error) {
                    alert('An error occured. Please try again.');
                });
            
        }
    }
})();
