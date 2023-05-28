const db = require("../models");
const Form = db.Form;

// Create and Save a new Form
exports.create = (req, res) => {
  // Create a Form
  const formData = new Form(req.body);
  // Save Form in the database
  formData
    .save(formData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Form.",
      });
    });
};

// Retrieve all Forms from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Form.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving forms.",
      });
    });
};

// Find a single Form with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Form.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Form with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Form with id=" + id });
    });
};

// Update a Form by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Form.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Form with id=${id}. Maybe Form was not found!`,
        });
      } else res.send({ message: "Form was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Form with id=" + id,
      });
    });
};

// Delete a Form with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Form.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Form with id=${id}. Maybe Form was not found!`,
        });
      } else {
        res.send({
          message: "Form was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Form with id=" + id,
      });
    });
};

// Delete all Forms from the database.
exports.deleteAll = (req, res) => {
  Form.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Forms were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all forms.",
      });
    });
};
