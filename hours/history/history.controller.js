const express = require('express')
const router = express.Router()
const historyService = require('./history.service')

router.get('/', getHistory)
router.get('/:id', getHistoryById)

module.exports = router

function getHistory(req, res, next) {
    historyService.get(req.hourId)
        .then(history => res.json(history))
        .catch(err => next(err))
}

function getHistoryById(req, res, next) {
    historyService.getById(req.hourId, req.params.id)
        .then(history => res.json(history))
        .catch(err => next(err))
}