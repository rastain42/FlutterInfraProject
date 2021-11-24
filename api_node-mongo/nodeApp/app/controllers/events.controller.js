const db = require("../models");
const Event = db.events;

// Create and Save a new event
exports.create = (req, res) => {
  console.log(req.body)
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a event
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
      eventStart: req.body.eventStart,
      eventEnd: req.body.eventEnd,
      UserID: req.body.UserID
    });
  
    // Save event in the database
    event
      .save(event)
      .then(data => {
        res.send(data);
        console.log("Saving\n"+event+"\ninto mongoDB")
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the event."
        });
      });
  };

// Retrieve all events from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Event.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving events."
        });
      });
  };

// Find a single event with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Event.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found event with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving event with id=" + id });
      });
  };
// Update a event by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Event with id=${id}. Maybe Event was not found!`
          });
        } else res.send({ message: "Event was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Event with id=" + id
        });
      });
  };

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Event.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
          });
        } else {
          res.send({
            message: "Event was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Event with id=" + id
        });
      });
  };
// Delete all Events from the database.
exports.deleteAll = (req, res) => {
    Event.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Events were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Events."
        });
      });
  };

// Find all published Events
exports.findAllPublished = (req, res) => {
    Event.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Events."
        });
      });
  };
const db = require("../models");
const Event = db.events;

// Create and Save a new event
exports.create = (req, res) => {
  console.log(req.body)
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a event
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
      eventStart: req.body.eventStart,
      eventEnd: req.body.eventEnd,
      UserID: req.body.UserID
    });
  
    // Save event in the database
    event
      .save(event)
      .then(data => {
        res.send(data);
        console.log("Saving\n"+event+"\ninto mongoDB")
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the event."
        });
      });
  };

// Retrieve all events from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Event.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving events."
        });
      });
  };

// Find a single event with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Event.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found event with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving event with id=" + id });
      });
  };
// Update a event by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Event with id=${id}. Maybe Event was not found!`
          });
        } else res.send({ message: "Event was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Event with id=" + id
        });
      });
  };

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Event.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
          });
        } else {
          res.send({
            message: "Event was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Event with id=" + id
        });
      });
  };
// Delete all Events from the database.
exports.deleteAll = (req, res) => {
    Event.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Events were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Events."
        });
      });
  };

// Find all published Events
exports.findAllPublished = (req, res) => {
    Event.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Events."
        });
      });
  };
