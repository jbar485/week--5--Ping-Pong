const path = require('path');
// Anything webpack requires to run goes at the top of our configuration file. For now, we only have require('path'), which we add to configure the path where our output files will be saved. We save this in a const variable. We'll soon be adding more require statements.
module.exports = {
  // All of our configuration is stored inside of module.exports. This is a Node.js convention. Essentially what we are doing is putting our configuration inside of a module and making it available for exporting. This means that other files will be able to import this module.
  entry: './src/main.js',
  // we specify an entry point. This is the JS file where webpack will enter our application and then use a dependency graph to load all other required JS files.
  output: {
    // We also specify an output. This is where all our code will go after it's processed. webpack will automatically concatenate our JS files for us and then save them in a file called bundle.js in a folder called dist. We only have access to path because we required it at the top of our configuration file.
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
