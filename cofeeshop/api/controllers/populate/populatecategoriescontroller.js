
/**
 * PopulateCoffeesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


 module.exports = {
  
    friendlyName: 'populate DB',


    description: 'populates the databse with categories data',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/demo/populate'
    //   }
  
    // },
  
  
    fn: async function () {
 
     await Categories.createEach([
        {Name:"cold", Description:"Cold beverages"},
        {Name:"Hot", Description:"Hot beverages"}
     ]);
    this.res.redirect("populate");
  
    }
  

};

