const options = {
  openapi: "3.0.0",
  autoBody: true
};

const swaggerAutogen = require("swagger-autogen")(options);

const doc = {
  info: {
    title: "My API CSE-341",
    description: "Api used for our CSE 341 class"
  },
  servers: [
    {
      url: "https://cse-341-yf6e.onrender.com",
      description: "local server"
    }
  ],
  host: "cse-341-yf6e.onrender.com",
  basePath: "/",
  schema: ["https"],

  definitions: {
    contacts: {
      firstName: "<String>",
      lastName: "<String>",
      email: "<String>",
      favoriteColor: "<String>",
      birthday: "<String>"
    },
    updateContacts: {
      firstName: "<String>",
      lastName: "<String>",
      email: "<String>",
      favoriteColor: "<String>",
      birthday: "<String>"

    }
  }
};

const outputFile = "./utils/swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("../server.js"); // Your project's root file
  console.log("api doc found at: https://cse-341-yf6e.onrender.com/api-docs/");
});
