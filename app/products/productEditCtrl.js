(
    function () {

        angular.module("productManagement")
            .controller("ProductEditCtl",
            ["product",ProductEditCtl ]);

        function  ProductEditCtl(product  ) {

            vm.product=product;

            if (vm.product && vm.product.productId){
                vm.title= "Edit: "+product.productName;
            }
            else {
                vm.title="Add Product"
            }
        }
    }()
);