/**
 * Created by User on 12/21/2016.
 */

(function () {
    "use strict";
    var app = angular.module("productManagement",
        ["common.services","productResourceMock","ui.router"]);

    app.config(["$stateProvider","$urlRouterProvider",
    function ($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise("/products");
        $stateProvider
            .state("home",{
                url:"/",
                templateUrl:"/app/welcomeView.html"

                }

            )
            .state("productList",{
                url:"/products",
               templateUrl:"app/products/productListView.html",
               controller:"ProductListCtrl as vm"
        })
            .state("productEdit",{
                url:"/products/edit:productId",
                controller: "ProductEditCtrl as vm"
            })

    }]);
}());


