const path = require('path');

module.exports = {
  webpack: (config) => {
    // Agregar alias para importar archivos desde '@components'
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@icons'] = path.join(__dirname, 'src/assets/icons');
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages');
    config.resolve.alias['@containers'] = path.join(__dirname, 'src/containers');
    config.resolve.alias['@context'] = path.join(__dirname, 'src/context');
    config.resolve.alias['@logos'] = path.join(__dirname, 'src/assets/logos');
    
    
    
    
    
    

    return config;
  },
};