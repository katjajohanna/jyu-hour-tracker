const InvalidBodyError = require('../_helpers/invalidBody.error')
const InvalidPermissionError = require('../_helpers/invalidPermission.error')
const NotFoundError = require('../_helpers/notFound.error')

const data = require('../_helpers/data')
const hours = data.hours
const history = data.history

let nextId = 10
let nextHistoryId = 10

module.exports = {
    getAll,
    getHoursForUser,
    saveHour,
    updateHour,
    deleteHour
}

async function getAll(filter) {
    return _filter(filter, hours)
}

async function getHoursForUser(userId, filter) {
    let filteredHours = hours.filter(hour => hour.userId === userId)
    return _filter(filter, filteredHours)
}

function _filter(filter, hoursToFilter) {
    if (filter.maxLength && !isNaN(filter.maxLength)) {
        hoursToFilter = hoursToFilter.filter(hour => hour.hours <= Number(filter.maxLength))
    }
    if (filter.minLength && !isNaN(filter.minLength)) {
        hoursToFilter = hoursToFilter.filter(hour => hour.hours >= Number(filter.minLength))
    }

    return hoursToFilter
}

// Note about parameters: destructure object given as parameter to its parts and rename hours to spentHours
async function saveHour(editorId, userId, { projectId, hours: spentHours, description }) {
    if (projectId == undefined || spentHours == undefined || description == undefined) {
        throw new InvalidBodyError('Invalid body')
    }

    // No need to give a key if the key and the parameter name for the value are the same
    const newHour = { id: nextId, userId, projectId, hours: spentHours, description }

    hours.push(newHour)
    nextId++

    _saveHistory(editorId, newHour)

    return newHour
}

async function updateHour(editorId, userId, id, { projectId, hours: spentHours, description }) {
    let hour = hours.find(hour => hour.id === Number(id))

    if (hour == undefined) {
        // For security, it would be better to throw InvalidPermissionError to prevent
        // an attack to find the amount of logged hours
        throw new NotFoundError('No hour with given ID')
    }

    if (hour.userId != userId) {
        throw new InvalidPermissionError('Cannot update this hour, because it does not belong to you')
    }

    if (projectId != undefined) hour.projectId = projectId
    if (spentHours != undefined) hour.hours = spentHours
    if (description != undefined) hour.description = description

    _saveHistory(editorId, hour)

    return hour
}

async function deleteHour(userId, id) {
    let hour = hours.find(hour => hour.id === Number(id))

    if (hour == undefined) {
        // For security, it would be better to throw InvalidPermissionError to prevent
        // an attack to find the amount of logged hours
        throw new NotFoundError('No hour with given ID')
    }

    if (hour.userId != userId) {
        throw new InvalidPermissionError('Cannot delete this hour, because it does not belong to you')
    }

    hours.splice(hours.indexOf(hour), 1)

    return
}

/**
 * Use underscore to annotate this as a private function
 */
function _saveHistory(editorId, hour) {
    history.push({
        id: nextHistoryId,
        savedByUserId: editorId,
        hourId: hour.id,
        at: hour.at,
        userId: hour.userId,
        projectId: hour.projectId,
        hours: hour.hours,
        description: hour.description
    })

    nextHistoryId++
}