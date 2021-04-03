/**
 * ShopController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   inputs:{
   id:{type:'number', required: true}

   },


   exits:{
       success:{
           viewTemplatePath:'pages/shop'
       },
   },


   fn: async function () {

     let CoffeeID = await Coffees.findOne()
       return {};
   }

};

