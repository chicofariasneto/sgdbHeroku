const {
    pool
} = require('../../../database/connect')

const {
    chat
} = require('../../sql/notificat')

const funcChat = {
    insertChats: async (chats) => {
        try {

            for (itChat of chats) {
                const {
                    id_chat,
                    name
                } = itChat

                pool.query(chat.insert, [id_chat, name])
            }

            return {
                success: "Chats added successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    selectChats: async () => {
        try {

            const selectedChats = await pool.query(chat.select)

            return {
                Chats: selectedChats.rows
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    selectChat: async (chatId) => {
        try {

            const selectedChat = await pool.query(chat.selectId, [chatId])

            return {
                chat: selectedChat.rows[0]
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    deletesChat: async () => {
        try {

            pool.query(chat.deleteAll)

            return {
                success: "Deleted all chats successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    deleteChat: async (chatId) => {
        try {

            pool.query(chat.delete, [chatId])

            return {
                success: "Deleted chat successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    }

}

module.exports = {
    funcChat
}