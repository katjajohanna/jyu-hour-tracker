const users = [
    { id: 1, username: 'gandalf', password: 'gray', firstName: 'Gandalf', lastName: 'The Gray', role: 'member' },
    { id: 2, username: 'bilbo', password: 'baggins', firstName: 'Bilbo', lastName: 'Baggins', role: 'member' },
    { id: 3, username: 'eowyn', password: 'rohan', firstName: 'Eowyn', lastName: 'Lady of Rohan', role: 'member' },
    { id: 4, username: 'legolas', password: 'greenleaf', firstName: 'Legolas', lastName: 'Greenleaf', role: 'member' },
    { id: 5, username: 'john', password: 'ronald', firstName: 'John', lastName: 'Ronald', role: 'admin' },
]

const projects = [
    { id: 1, name: 'Gather intel' },
    { id: 2, name: 'Prepare the birthday party' },
    { id: 3, name: 'Brainstorm one-liners for killing the Witch-king' },
    { id: 4, name: 'Practice shield skating' }
]

const hours = [
    { id: 1, at: '2019-10-08 10:00:14', userId: 1, projectId: 1, hours: 1.5, description: 'Read books at Gondor' },
    { id: 2, at: '2019-10-08 12:13:26', userId: 1, projectId: 1, hours: 0.5, description: 'Meet with Saruman' },
    { id: 3, at: '2019-10-07 12:13:39', userId: 1, projectId: 2, hours: 1, description: 'Prepare fireworks' },

    { id: 4, at: '2019-10-07 12:13:12', userId: 2, projectId: 2, hours: 2, description: 'Hide from the relatives' },

    { id: 5, at: '2019-10-07 12:13:05', userId: 3, projectId: 3, hours: 3, description: 'List possible one-liners' },
    { id: 6, at: '2019-10-08 12:13:45', userId: 3, projectId: 3, hours: 1, description: 'Erase bad ones' },

    { id: 7, at: '2019-10-08 12:15:03', userId: 4, projectId: 4, hours: 0.5, description: 'Kill an orc to get a shield' },
    { id: 8, at: '2019-10-07 12:13:14', userId: 4, projectId: 4, hours: 2.5, description: 'Practice' },
    { id: 9, at: '2019-10-07 14:56:00', userId: 4, projectId: 4, hours: 3, description: 'Practice in a staircase' }
]

const history = [
    { id: 1, savedByUserId: 1, hourId: 1, at: '2019-10-08 10:00:14', userId: 1, projectId: 1, hours: 1.5, description: 'Read books at Gondor' },
    { id: 2, savedByUserId: 1, hourId: 2, at: '2019-10-08 12:13:26', userId: 1, projectId: 1, hours: 0.5, description: 'Meet with Saruman' },
    { id: 3, savedByUserId: 1, hourId: 3, at: '2019-10-07 12:13:39', userId: 1, projectId: 2, hours: 1, description: 'Prepare fireworks' },

    { id: 4, savedByUserId: 2, hourId: 4, at: '2019-10-07 12:13:12', userId: 2, projectId: 2, hours: 2, description: 'Hide from the relatives' },

    { id: 5, savedByUserId: 3, hourId: 5, at: '2019-10-07 12:13:05', userId: 3, projectId: 3, hours: 3, description: 'List possible one-liners' },
    { id: 6, savedByUserId: 3, hourId: 6, at: '2019-10-08 12:13:45', userId: 3, projectId: 3, hours: 1, description: 'Erase bad ones' },

    { id: 7, savedByUserId: 4, hourId: 7, at: '2019-10-08 12:15:03', userId: 4, projectId: 4, hours: 0.5, description: 'Kill an orc to get a shield' },
    { id: 8, savedByUserId: 4, hourId: 8, at: '2019-10-07 12:13:14', userId: 4, projectId: 4, hours: 2.5, description: 'Practice' },
    { id: 9, savedByUserId: 4, hourId: 9, at: '2019-10-07 14:56:00', userId: 4, projectId: 4, hours: 3, description: 'Practice in a staircase' }
]

module.exports = {
    users,
    projects,
    hours,
    history
}