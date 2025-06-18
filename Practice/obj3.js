let cart = {
    username: "john_doe",
    items: [
        { product: "Laptop", price: 50000, quantity: 1 },
        { product: "Mouse", price: 800, quantity: 2 }
    ],
    totalAmount: function() {
        // Calculate total
        let sum=0
        for(let i of cart.items)
        {
           sum += i.price
        }
        console.log(sum);
    }
};
cart.totalAmount();

//Add a new item to the cart.
cart.items[2] = {
    product: "keyboard",
    price: 2000,
    quantity: 1
}
console.log(cart.items);

//Increase quantity of an existing product.
  for(let x of cart.items)
  {
    if(x.product === "keyboard")
    {
        x.quantity = 2
    }
  }
  console.log(cart.items);

  //Remove an item from the cart.

  cart.items = cart.items.filter((item) => 
    item.product !== "keyboard"
  )
  console.log(cart.items);

  //Return all product names in the cart.
  for(let x of cart.items)
  {
    console.log(x.product);
  }