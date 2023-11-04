// // 73

// var allProduct = [
//     { id: 1, name: "laptop", price: 170 },
//     { id: 2, name: "phone", price: 180 },
//     { id: 3, name: "pen", price: 1070 },
//     { id: 4, name: "mobile", price: 1741 },
//     { id: 5, name: "headphone", price: 14870 }
//   ];
  
//   var userBasket = [
//     { id: 1, name: "laptop", price: 170 },
//     { id: 2, name: "phone", price: 180 },
//     { id: 3, name: "pen", price: 1070 }
//   ];
//   // --------------------------------------
  
//   while (productStatus != "") {
//     var productStatus = prompt("add or delete or enter to payment");
  
//     if (productStatus === "add") {
//       while (userProduct != "") {
//         var userProduct = prompt("enter product name:");
  
//         if (userProduct != "") {
//           var reqProduct;
  
//           var shop = allProduct.some(function(product) {
//             if (product.name === userProduct) {
//               reqProduct = product;
//               return true;
//             }
//           });
  
//           if (shop === true) {
//             var newProduct = {
//               id: reqProduct.id,
//               name: reqProduct.name,
//               price: reqProduct.price
//             };
  
//             userBasket.push(newProduct);
//           } else {
//             alert("product not found");
//           }
//         }
//       }
//     } else if (productStatus === "delete") {
//       while (userProduct_d != "") {
//         var userProduct_d = prompt("enter product name to delete:");
  
//         if (userProduct_d != "") {
//           var productIndex = userBasket.findIndex(function(product) {
//             return product.name === userProduct;
//           });
//         }
//         userBasket.splice(productIndex, 1);
//       }
//     }
//   }
  
//   // ---------------------------------------------
//   if (userBasket.length != 0) {
//     var sum = 0;
  
//     userBasket.forEach(function(product) {
//       sum += product.price;
//     });
  
//     console.log(userBasket);
//     console.log("total:", sum);
//   } else {
//     console.log("basket is empty");
//   }
  