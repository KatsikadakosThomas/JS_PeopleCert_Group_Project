var stripe= require('stripe')('sk_test_51IcCKmB8QCrXCSB3eCWHREnZZUn7NT3fU1TW8Ae274Fkm3w0b6FzrZ3Sjvl3QHLPpPmlx9Yv8Cs9CqatWEmTrnph00ngrn1J9h')

module.exports = {

fn: async function() {
      
  var amount= await Orders.find().where({id:1})
  var orders = await OrderDetails.find().where({ordersID:1})


	let arr = [];
	for(let i = 0; i <orders.length; i++){
		arr.push(orders[i].price);
	}
 console.log(arr);
 var finalprice = arr.reduce((a, b) => a + b, 0)
console.log(finalprice)

  var payment={
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Your Order',
          },
          unit_amount: 0,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:1337/demo/homepage',
    cancel_url: 'http://localhost:1337/demo/populate',
  }
  
  payment.line_items[0].price_data.unit_amount=amount[0].totalPrice;
  console.log(amount[0].totalPrice);

      const session = await stripe.checkout.sessions.create(payment);
    
    return this.res.json({ id: session.id });
    
    }

};