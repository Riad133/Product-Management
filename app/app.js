/**
 * Created by User on 12/21/2016.
 */

(function () {
    "use strict";
    var app = angular.module("productManagement",
        ["common.services","productResourceMock","ui.router"]);

    app.config(["$stateProvider","$urlRouterProvider",
    function ($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home",{
                url:"/",
                templateUrl:"app/welcomeView.html"

                }

            )
            .state("productList",{
                url:"/products",
               templateUrl:"app/products/productListView.html",
               controller:"ProductListCtrl as vm"
        })

            .state("productDetail",{
                url:"/products/:productId",
                templateUrl:"app/products/productDetailView.html",
                controller:"ProductDetailCtrl as vm",
                resolve:{
                    productResource:"productResource",
                    product: function (productResource, $stateParams) {
                        var productId= $stateParams.productId;
                        return productResource.get({productId: productId}).$promise;
                    }

                }
            })
            .state("productEdit",{
                url:"/products/edit:productId",
                controller: "ProductEditCtrl as vm",
                resolve:{

                    productResource:"productResource",

                    product: function (productResource, $stateParams) {

                        var productId= $stateParams.productId;
                        var product = productResource.get({productId:productId}).$promise;
                        return product;
                    }
                }
            })
            .state("productEdit.info",{
                url:"/info",
                templateUrl:"/app/products/productEditInfoView.html"
            })
            .state("productEdit.price",{
                url:"/price",
                templateUrl:"/app/products/productEditPriceView.html"
            })
            .state("productEdit.tags",{
                url:"/tags",
                templateUrl:"/app/products/productEditTagsView.html"
            })

    }]);
}());


