const data = require('../_helpers/data')
const users = data.users
const projects = data.projects
const hours = data.hours

module.exports = {
    getSummary
}

foo = {
    id: 1,
    name: 'Pick up eggs',
    members: ['Anne Shirley', 'Gilbert Blythe'],
    hoursTotal: 1,
    listing: [
        {
            userId: 1,
            name: 'Anne Shirley',
            hoursTotal: 1,
            hoursDetailed: [
                {
                    at: '2019-10-05 10:00:14',
                    hours: 1,
                    description: 'foo'
                }
            ]
        }
    ]
}
bar = { id: 1, at: '2019-10-05 10:00:14', userId: 1, projectId: 1, hours: 1.5, description: 'Got eggs for breakfast' }

async function getSummary() {
    return projects.map(project => {
        const projectHours = hours.filter(hour => hour.projectId == project.id)
        let members = []
        let hoursTotal = 0
        let listing = []

        projectHours.forEach(hour => {
            let member = listing.find(l => l.userId == hour.userId)

            if (member == undefined) {
                const user = users.find(u => u.id == hour.userId)

                member = {
                    userId: hour.userId,
                    name: user.firstName + ' ' + user.lastName,
                    hoursTotal: 0,
                    hoursDetailed: []
                }
                listing.push(member)
                members.push(user.firstName + ' ' + user.lastName)
            }

            member.hoursDetailed.push({ at: hour.at, hours: hour.hours, description: hour.description })
            member.hoursTotal += hour.hours
            hoursTotal += hour.hours
        })

        return {
            id: project.id,
            name: project.name,
            members,
            hoursTotal,
            listing
        }
    })
}