/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async function(req, res) {

        var productName = req.body.name
        var price = req.body.price
        var image = req.body.image
        var desc = req.body.description

        await Coffees.create({
            name: productName,
            price: price,
            image: image,
            description: desc
        })

        //put a success message in session
        req.session.success = 'Coffees successfully registered.'

        res.redirect('/products');
        
    },

    delete: async function(req, res) {
        let productId = req.body.product.id;
        await Cofees.destroy({id:productId})
        //put a success message in session
        req.session.success = 'Coffee successfully deleted.'
        res.redirect('/products');
    }

};

