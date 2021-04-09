var stripe= require('stripe')('sk_test_51IcCKmB8QCrXCSB3eCWHREnZZUn7NT3fU1TW8Ae274Fkm3w0b6FzrZ3Sjvl3QHLPpPmlx9Yv8Cs9CqatWEmTrnph00ngrn1J9h')

module.exports = {

fn: async function() {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'https://localhost:1337/demo/homepage',
        cancel_url: 'https://localhost:1337/demo/populate',
      });
    
      this.res.json({ id: session.id });
    }

};
