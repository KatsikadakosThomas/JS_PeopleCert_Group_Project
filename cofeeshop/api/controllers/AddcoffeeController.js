/**
 * AddcoffeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 module.exports = {
    exits: {
        success: {
          name:{
            type:'string',
            required: true,
           },
      
           Description: {
            type: 'string',
            required: true,
           },
      
           price: {
            type:'number',
            required:true,
           
          },
        },
    
  
    fn: async function(Inputs, exits) {
      var addCoffee = await coffees.create({
        name: inputs.name,
        Description: inputs.Description,
        price: inputs.price,
});

      if (!addCoffee) {
        return exits.invalid({
          message: 'Wrong coffee'
        });
      }
      return exits.success({
        message: 'Coffee was created successfully.',
        data: coffeesRecord
      }); 
    } 
 }
}

