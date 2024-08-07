// CRUD definitions
// CRUD stands for Create, Read, Update, Delete. These are the basic operations that a simple web app would be designed to achieve. In the context of a RESTful API, these operations are mapped to HTTP methods as follows:
//  create:  If you want to create a new Comment, you can use the following method.
//  findAll: If you want to retrieve all comments, you can use the following method.
//  findOne: If you want to retrieve a single Comment by id, you can use the following method.
//  update: If you want to update a comment, you can use the following method.
//  delete: If you want to delete a comment, you can use the following method.
//  deleteAll: If you want to delete all comments, you can use the following method.
//  findAllPublished: If you want to retrieve all published comments, you can use the following method.

const db = require("../models"); // Importing the models.
const Comment = db.comments;

// Create and Save a new comment
exports.create = (req, res) => {

};

// Retrieve all comments from DB
exports.findAll = (req, res) => {

}

// Find a single comment
exports.findOne = (req, res) => {

}

// Update a comment
exports.update = (req, res) => {

}

// Delete a comment
exports.delete = (req, res) => {

}

// Delete all comments
exports.deleteAll = (req, res) => {

}

// Find all comments
exports.findAllPublished = (req, res) => {

}