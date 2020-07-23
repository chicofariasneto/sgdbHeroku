const {
    pool
} = require('../../../database/connect')

const {
    email
} = require('../../sql/notificat')

const funcEmail = {

    insertEmails: async (emails) => {
        try {

            for (itEmail of emails) {

                pool.query(email.insert, [itEmail.email])

            }

            return {
                success: "Added emails successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    selectEmails: async () => {
        try {

            const selectedEmails = await pool.query(email.select)

            return {
                emails: selectedEmails.rows
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    deleteEmails: async () => {
        try {

            pool.query(email.deleteAll)

            return {
                success: "Deleted emails successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    deleteEmail: async (Email) => {
        try {

            pool.query(email.delete)

            return {
                success: "Deleted email successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    }
}

module.exports = {
    funcEmail
}