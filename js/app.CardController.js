(function(){
    angular
        .module("app")
        .controller('CreditCardChargeController', CreditCardChargeController);

    CreditCardChargeController.$inject = [];

    function CreditCardChargeController() {

        var vm = this;
        vm.complete = complete;
        vm.tabClicked = tabClicked;
        vm.isSearch = true;
        vm.uniqueVendors= ["Amazon", "Amazon.com", "Target", "BestBuy", "Costco", "walmart", "Walmart-eu", "Flipkart"];

        function tabClicked(tabName){
            vm.isSearch = tabName.toLowerCase() == "search";
        }

        function complete(){
            $("#vendor").autocomplete({
                source: vm.uniqueVendors
            });
        }
    }
})();