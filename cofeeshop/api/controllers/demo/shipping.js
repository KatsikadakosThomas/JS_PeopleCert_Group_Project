module.exports = {

  
    description: 'shipping',

    inputs: {
        Add_address:{
            required:true,
            type:'string',
        }
    },
    fn: async function ({Add_address}) {
        var a = this.req.session.order.id
       await Orders.update().set({address : Add_address}).where({'id': a})
       return this.res.view('pages/payment/payment')
    }
  
  };