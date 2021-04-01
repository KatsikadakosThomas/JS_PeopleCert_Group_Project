/**
 * ShopController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {



   exits:{
       success:{
           viewTemplatePath:'pages/shop'
       },
   },


   fn: async function () {
    let coffeeData = await Coffees.findOne({ id: 1 });
    console.log(coffeeData);
    return {coffeeData};
   }

};
