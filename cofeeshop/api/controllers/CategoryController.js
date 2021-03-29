/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
  
    create: async function(req, res) {

        var categoryName = req.body.name
        var desc = req.body.description

        await Categories.create({
            Name: categoryName,
            Description: desc
        })

        //put a success message in session
        req.session.success = 'Category succesfully created.'

        res.redirect('/products');
        
    }

};

