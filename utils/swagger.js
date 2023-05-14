const options = {
  autoBody: true
};

const swaggerAutogen = require("swagger-autogen")(options);

const doc = {
  info: {
    title: "My API CSE-341",
    description: "Api used for our CSE 341 class"
  },
  host: "localhost:8000/",
  basePath: "",
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
  console.log("api doc found at: http://localhost:8000/api-docs/");
});
