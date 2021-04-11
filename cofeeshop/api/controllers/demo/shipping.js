module.exports = {

  
    description: 'shipping',

    inputs: {
        Add_address:{
            required:true,
            type:'string',
        }
    },
    fn: async function () {
 
       return res.redirect('back');
    }
  
  
  };