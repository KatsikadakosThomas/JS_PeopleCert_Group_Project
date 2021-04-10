var stripe= require('stripe')('sk_test_51IcCKmB8QCrXCSB3eCWHREnZZUn7NT3fU1TW8Ae274Fkm3w0b6FzrZ3Sjvl3QHLPpPmlx9Yv8Cs9CqatWEmTrnph00ngrn1J9h')

module.exports = {

fn: async function() {
      
  var amount= await Orderdetails.find().where({ordersID:1})




  
  // console.log(amount[0].totalPrice);
  var payment={
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 30000,
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
