module.exports = {



    description: 'Payment page.',
  
  
    exits: {
  
      // success: {
      //   viewTemplatePath: 'pages/payment/payment',
      //   description: 'Display the payment page'
      // },
  
    },
  
  
    fn: async function () {
 
    return this.res.view('pages/payment/payment')
  
    }
  
  
  };