const express = require('express');
const router = express.Router();
const db = require('../db/questions')

/**
 * - GET /api/questions : get all questions
 * - GET /api/questions/{id} : get question by id
 * - POST /api/questions : add a new question
 * - DELETE /api/questions/{id}
 */

router.get('/questions', (req, res) => {
    return db.addQuestion()
})

router.get('/questions/:id', (req, res) => {
    return db.addQuestion(req.params.id)
})

router.post('/questions', (req, res) => {
    return db.addQuestion()
})

router.delete('/questions', (req, res) => {
    return db.addQuestion()
})

router.put('/questions', (req, res) => {
    return db.addQuestion()
})