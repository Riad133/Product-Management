/**
 * Created by Riad133 on 20-Feb-17.
 */
(function () {

    "use strict";

    angular.module("productManagement")
        .controller("ProductDetailCtrl",
            ["product",ProductDetailCtrl]);

    function ProductDetailCtrl(product) {

        var vm =this;

        vm.product= product;
        vm.title="Prodcut Detail : " + vm.product.productName;
        if(vm.product.tags){

            vm.product.tagList=vm.product.tags.toString();
        }

        
    }

}());