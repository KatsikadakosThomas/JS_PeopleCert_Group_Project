
/**
 * PopulateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  
    friendlyName: 'populate DB',


    description: 'populates the databse with dummy data',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/demo/populate'
    //   }
  
    // },
  
    fn: async function () {
      
        await Coffees.createEach([
     {name:"espresso", description:"a dark blend no milk", price:1, categoryID:1},
     {name:"Cappucino", description:"a dark blend with milk", price:1.8, categoryID:1},
     {name:"freddo esspresso", description:"a dark blend no milk with ice", price:1.2, categoryID:2},
     {name:"freddo cappucino", description:"a dark blend with milk with ice", price:2, categoryID:2}   
    ]);
    this.res.redirect("populate");
  
    }
  

};

