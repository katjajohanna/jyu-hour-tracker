const express = require('express')
const router = express.Router()
const summaryService = require('./summary.service')

router.get('/', getSummary)

module.exports = router

function getSummary(req, res, next) {
    if (req.user.role != 'admin') {
        res.status(403).json({ message: 'You don\'t have access to the summary' })
        return
    }

    summaryService.getSummary()
        .then(summary => res.json(summary))
        .catch(err => next(err))
}