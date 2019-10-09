const express = require('express')
const router = express.Router()
const hourService = require('./hour.service')
const history = require('./history/history.controller')

router.get('/', getHours)
router.post('/', saveHour)
router.put('/:id', updateHour)
router.delete('/:id', deleteHour)

router.use('/:id/history', function (req, res, next) {
    req.hourId = req.params.id;
    next()
}, history);

module.exports = router

/**
 * Returns users' hours
 * For admin, returns hours for all users
 * Filters can be used:
 * - maxLength
 * - minLength
 */
function getHours(req, res, next) {
    if (req.user.role == 'admin') {
        hourService.getAll(req.query)
            .then(hours => res.json(hours))
            .catch(err => next(err))

        return
    }

    hourService.getHoursForUser(req.user.id, req.query)
        .then(hours => res.json(hours))
        .catch(err => next(err))
}

/**
 * Saves a new hour
 * Allow saving only for user and amdin
 */
function saveHour(req, res, next) {
    hourService.saveHour(req.user.id, _getUserId(req), req.body)
        .then(hour => res.json(hour))
        .catch(err => next(err))
}

/**
 * Updates an hour
 * Allow only for user and admin
 */
function updateHour(req, res, next) {
    hourService.updateHour(req.user.id, _getUserId(req), req.params.id, req.body)
        .then(hour => res.json(hour))
        .catch(err => next(err))
}

/**
 * Deletes an hour
 * Allow only for admin
 */
function deleteHour(req, res, next) {
    hourService.deleteHour(_getUserId(req), req.params.id)
        .then(hour => res.json(hour))
        .catch(err => next(err))
}

/**
 * Returns user ID for logged in user,
 * except if user is admin, then returns
 * user ID specified in body
 *
 * Use underscore to annotate this as a private function
 */
function _getUserId(req) {
    let userId = req.user.id

    if (req.user.role == 'admin') {
        userId = req.body.userId
    }

    return userId
}