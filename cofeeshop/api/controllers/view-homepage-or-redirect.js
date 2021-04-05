module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',
 
  inputs: {
    isSuperAdmin: {
      type: 'boolean', 
    }
  },

  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

  },


  fn: async function () {
    if (this.req.me) {
      throw {redirect:'/welcome'};
    }
    return {};

  }
};
// fn: async function () {
//   //checks if super admin redirects to super admin home
//   if (this.req.me.isSuperAdmin==true) {
//     this.res.redirect('/superadmin');
//   }else{
//     if(this.req.me){
//       this.res.redirect('/welcome');
//     }
//   }

//   return {};

// }


// };
