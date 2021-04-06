module.exports = {


  friendlyName: 'Checkout cart action',


  description: `With this action the output of a cart become an order 
  and registers in the database`,


  inputs: {
    req: {
      type: 'ref',
      required: true
    },

  },


  exits: {

  },


  fn: async function (inputs,exits) {
    console.log(updatedCart);
    var currentCart = inputs.req.session.updatedCart

    await OrderDetails.create(
      {coffeeID:"cold",ordersID:"Cold beverages"})

    return;

  }


};
