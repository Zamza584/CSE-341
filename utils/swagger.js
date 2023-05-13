const options = { 
  openapi: '3.0.0',
  autoBody:  true      
}

const swaggerAutogen = require("swagger-autogen")(options);

const doc = {
  info: {
    title: "My API",
    description: "Description"
  },
  servers: [
    {
      url: "https://cse-341-pr-3.onrender.com",
      description: "local server"
    }
  ],
  host: "cse-341-pr-3.onrender.com",  
  basePath: '/',
  schema: ["https"],

  definitions: {
    contacts: { 
      type: "object",
      properties: { 
        title: { 
          _id: {
            type: "String",
          }
        }
      }

    }
  }

};

const outputFile = "./utils/swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('../server.js'); // Your project's root file
  console.log("api doc found at: https://cse-341-pr-3.onrender.com/api-docs/")
});
    