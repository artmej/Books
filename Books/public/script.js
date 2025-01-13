var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    var getData = async function() {
        try {
            const response = await $http({
                method: 'GET',
                url: '/book'
            });
            $scope.books = response.data;
            $scope.$apply();

        } catch (response) {
            console.log('Error: ' + response);
        }
    };
    getData();

    $scope.del_book = async function(book) {
        try {
            const response = await $http({
                method: 'DELETE',
                url: `/book/${book.isbn}`
            });
            console.log(response);
            await getData();
            $scope.$apply();
        } catch (response) {
            console.log('Error: ' + response);
        }
    };

    $scope.add_book = async function() {
        var body = JSON.stringify({
            name: $scope.Name,
            isbn: $scope.Isbn,
            author: $scope.Author,
            pages: $scope.Pages
        });

        try {
            const response = await $http({
                method: 'POST',
                url: '/book',
                data: body
            });
            console.log(response);
            await getData();
            $scope.$apply();
        } catch (response) {
            console.log('Error: ' + response);
        }
    };
});
