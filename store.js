var allProduct = [
  { id: 1, name: "laptop", price: 5000000 },
  { id: 2, name: "phone", price: 20000 },
  { id: 3, name: "pen", price: 5000 },
  { id: 4, name: "mobile", price: 40000 },
  { id: 5, name: "headphone", price: 100000 }
];

var userBasket = [
  { id: 1, name: "laptop", price: 5000000 },
  { id: 2, name: "phone", price: 20000 },
  { id: 3, name: "pen", price: 5000 }
];

var productStatus = prompt("add or delete");

if (productStatus === "add") {
  var userProduct = prompt("enter product name:");
  var productData;
  var isInShop = allProduct.some(function(product) {
    if (product.name === userProduct) {
      productData = product;
      return true;
    }
  });

  if (isInShop === true) {
    var newProduct = {
      id: productData.id,
      name: productData.name,
      price: productData.price
    };
    userBasket.push(newProduct);
    //
  } else {
    alert("موجود نیست");
  }
} else if (productStatus === "delete") {
  var userProduct_d = prompt("enter product name to delete:");

  var productIndex = userBasket.findIndex(function(product) {
    return product.name === userProduct_d;
  });

  userBasket.splice(productIndex, 1);
} else {
  alert("err");
}

if (userBasket.length != 0) {
  let filterUserBasket = userBasket.filter(function(product) {
    return product.price < 100000;
  });

  let postCost = filterUserBasket.length * 1000; //هزینه ارسال

  var sum = 0;
  userBasket.forEach(function(product) {
    sum += product.price;
  });

  console.log(userBasket); // سبد خرید
  console.log("total:", sum); //جمع سبد خرید
  console.log("postcost:", postCost); //هزینه ارسال
} else {
  console.log("basket is empty"); //سبد خرید خالی است
}

// اینجا فقط هر کاری ر.یک بار میشه انجام داد
// ببین مهران چی میگه باگ اون چیه


let x=true;
if(x){
  console.log(true)
}
