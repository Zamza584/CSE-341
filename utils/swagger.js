const options = {
  openapi: "3.0.0",
  autoBody: true,
};

const swaggerAutogen = require("swagger-autogen")(options);

const doc = {
  info: {
    version: "1.0.0",
    title: "My API CSE-341",
    description: "Api used for our CSE 341 class"
  },
  servers: [
    {
      url: "https://cse-341-yf6e.onrender.com/",
      description: "main server"
    },
    {
      url: "http://localhost:8000/",
      description: "the other server"
    }
  ],
  consumes: [],
  produces: [],
  host: "localhost:8000/",
  basePath: "",
  schema: ["https"],

  definitions: {
    contacts: {
      firstName: "any",
      lastName: "any",
      email: "any",
      favoriteColor: "any",
      birthday: "any"
    },
    updateContacts: {
      firstName: "any",
      lastName: "any",
      email: "any",
      favoriteColor: "any",
      birthday: "any"
    }
  }
};

const outputFile = "./utils/swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("../server.js"); // Your project's root file
  console.log("api doc found at: http://localhost:8000/api-docs/");
});
