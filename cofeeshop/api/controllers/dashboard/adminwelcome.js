module.exports = {


    friendlyName: 'View adminwelcome page',
  
  
    description: 'Display the dashboard "adminwelcome" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/dashboard/adminwelcome',
        description: 'Display the welcome page for admins'
      },
  
    },
  
  
    fn: async function () {
  
      return {};
  
    }
  
  
  };
  