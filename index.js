const nodesdk = require("@gaia-pipeline/nodesdk");

function CreateUser(args) {
    console.log("Hello World!");
}

// Serve
nodesdk.Serve([{
    handler: CreateUser,
    title: "Create DB User",
    description: "Creates a database user with least privileged permissions."
}]);
