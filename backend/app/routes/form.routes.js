module.exports = (app) => {
  const form = require("../controllers/form.controller.js");

  var router = require("express").Router();

  // Create a new Form
  router.post("/", form.create);

  // Retrieve all Forms
  router.get("/", form.findAll);

  // Retrieve a single Form with id
  router.get("/:id", form.findOne);

  // Update a Form with id
  router.put("/:id", form.update);

  // Delete a Form with id
  router.delete("/:id", form.delete);

  // Delete all
  router.delete("/", form.deleteAll);

  app.use("/api/form", router);
};
