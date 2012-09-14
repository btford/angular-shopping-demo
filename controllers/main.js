'use strict';

shoppingApp.controller('MainCtrl', function($scope) {

  $scope.catalog = [
    { name: 'shoes', price: 29.99, rating: 2.8 },
    { name: 'shirt', price: 9.99, rating: 3 },
    { name: 'pants', price: 19.99, rating: 4.5 }
  ];

  $scope.cart = [];

  $scope.addToCart = function (item) {
    var i;
    for (i = 0; i < $scope.cart.length; i++) {
      if ($scope.cart[i].product === item) {
        $scope.cart[i].quantity += 1;
        return;
      }
    }
    $scope.cart.push({
      product: item,
      quantity: 1
    });
  };

  $scope.removeFromCart = function (item) {
    var i;
    for (i = 0; i < $scope.cart.length; i++) {
      if ($scope.cart[i] === item) {
        $scope.cart.splice(i, 1);
        break;
      }
    }
  };

  $scope.getTotal = function () {
    var total = 0;
    $scope.cart.forEach(function (item) {
      if (item.quantity > 0) {
        total += item.product.price * item.quantity;
      }
    });
    return total;
  };

  $scope.getCartCount = function () {
    var count = 0;
    $scope.cart.forEach(function (item) {
      count += item.quantity;
    });
    return count;
  };

  $scope.clearCart = function () {
    $scope.cart = [];
  };
});
