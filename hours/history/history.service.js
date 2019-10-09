const data = require('../../_helpers/data')
const history = data.history

module.exports = {
    get,
    getById
}

async function get(hourId) {
    return history.filter(h => h.hourId == hourId)
}

async function getById(hourId, historyId) {
    return history.filter(h => h.hourId == hourId && h.id == historyId)
}