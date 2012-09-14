'use strict';

shoppingApp.controller('CheckoutCtrl', function($scope, $location) {

  // clear any items from the cart with a non-positive quantity
  $scope.cart.forEach(function (item) {
    if (item.quantity < 1) {
      $scope.removeFromCart(item);
    }
  });

  // redirect back home if there are no items in the cart
  if ($scope.cart.length === 0) {
    $location.url('/');
  }

  $scope.shipping = 7.88;

  $scope.getTax = function (price) {
    return Math.round(price * 5) / 100;
  };

});
