module.exports = {



    description: 'Payment page.',
  
  
    exits: {
  
      // success: {
      //   viewTemplatePath: 'pages/payment/payment',
      //   description: 'Display the payment page'
      // },
  
    },
  
  
    fn: async function () {
        console.log(this.req.session.cart);
        let order=this.req.session.cart;
        let user=this.req.me;
        const ordersQuerry= await Orders.create({totalPrice:`${order.totalPrice}`, userID:`${user.id}`}).fetch();
      console.log(ordersQuerry);
    return this.res.view('pages/payment/payment')
  
    }
  
  
  };