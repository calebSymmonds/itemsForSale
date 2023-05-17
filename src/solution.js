/*
When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
This function will take in all the values with the "name" key and output both how many items there are as well as what they are.
*/

function listAllItems(products) {
  let items = [];
  for (let key in products) {
  const product = products[key];
    if (typeof product == 'object' && product.hasOwnProperty('name')) {
      items.push(product.name);
    }
  }
  if (items.length == 0) {
    return "There are no items for sale."
  } else if (items.length == 1) {
    return `There is 1 item for sale: ${items[0]}.`
  } else if (items.length == 2) {
    return `There are 2 items for sale: ${items[0]} and ${items[1]}.`
  } else if (items.length > 2) {
    const lastItem = items.pop();
    return `There are ${items.length + 1} items for sale: ${items.join(', ')}, and ${lastItem}.`
  }
}

module.exports = {
  listAllItems,
};
