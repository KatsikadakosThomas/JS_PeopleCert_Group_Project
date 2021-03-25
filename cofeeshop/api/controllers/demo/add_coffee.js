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
          message: 'Wrong user'
        });
      }
      return exits.success({
        message: 'Coffee was created successfully.',
        data: coffeesRecord
      });
    } 
 }
}