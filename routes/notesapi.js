const express = require('express');
const { getNotes, addNotes, getOneNote, createOneNote, updateNotes } = require('../controllers/notescontroller');
const protect = require('../middlewares/authmiddlewares');
const route = express.Router();
route.get("/", protect, getNotes);
route.post("/create", protect, addNotes);
route.get("/:id",protect, getOneNote )
route.put("/:id", protect, createOneNote);
route.delete("/:id", protect, updateNotes);

module.exports = route;
