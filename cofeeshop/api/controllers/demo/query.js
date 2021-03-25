
module.exports={
    exits:{
        success:{
            // viewTemplatePath:"pages/homepage"
        }
    },
    fn: async function(){
        var coffee1 = await coffees.find({
            where: { id: '1' },
           
          });
        
    
      console.log(coffee1);
        return       console.log(coffee1);

    }
}






