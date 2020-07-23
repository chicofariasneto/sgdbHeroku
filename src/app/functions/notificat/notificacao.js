const {
    pool
} = require('../../../database/connect')

const {
    leitos,
    notificacao,
    rh,
    sadt,
} = require('../../sql/notificat')

const funcNotificacao = {

    insertNotificacoes: async (notificacoes) => {
        try {

            for (itNotificacao of notificacoes) {
                try {

                    const {
                        notificacaoid,
                        unidadehospitalarid,
                        unidadehospitalarnome,
                        sigla,
                        siglacode,
                        areaid,
                        areanome,
                        areanomecod,
                        datanotificacao,
                        usuarionotificacao,
                        observacao
                    } = itNotificacao

                    await pool.query(notificacao.insert, [notificacaoid, unidadehospitalarid, unidadehospitalarnome,
                        sigla, siglacode, areaid, areanome, areanomecod, datanotificacao, usuarionotificacao, observacao
                    ])

                    for (itRh of itNotificacao.rh) {
                        const {
                            codigo,
                            codsituacao,
                            nome,
                            qtddisponivel,
                            qtdprevista,
                            observacao
                        } = itRh

                        pool.query(rh.insert, [notificacaoid, codigo, codsituacao, nome,
                            qtddisponivel, qtdprevista, observacao
                        ])

                    }

                    for (itSadt of itNotificacao.sadt) {
                        const {
                            codigo,
                            nome,
                            checked,
                            observacao
                        } = itSadt

                        pool.query(sadt.insert, [notificacaoid, codigo, nome, checked, observacao])
                    }

                    for (itLeitos of itNotificacao.leitos) {
                        const {
                            unidadeproducaoid,
                            codsituacao,
                            nome,
                            qtd,
                            qtdocupado,
                            qtdiso,
                            qtdisoocupado,
                            qtdobs,
                            qtdobsocupado,
                            observacao
                        } = itLeitos

                        pool.query(leitos.insert, [notificacaoid, unidadeproducaoid, codsituacao, nome,
                            qtd, qtdocupado, qtdiso, qtdisoocupado, qtdobs, qtdobsocupado, observacao
                        ])
                    }
                } catch {
                    continue
                }
            }

            return {
                success: "Added notifications successfully"
            }
        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    selectNotificacoes: async () => {
        try {

            const selectedNotificacoes = await pool.query(notificacao.select)
            const selectedRh = await pool.query(rh.select)
            const selectedSadt = await pool.query(sadt.query)
            const selectedLeitos = await pool.query(leitos.query)

            return {
                notificacoes: selectedNotificacoes.rows.map((elementNotificacao) => {
                    return {
                        notificacao: elementNotificacao,
                        rh: selectedRh.rows.filter((elementRh) => {
                            return elementNotificacao.notificacaoid === elementRh.fk_notificacaoid
                        }),
                        sadt: selectedSadt.rows.filter((elementSadt) => {
                            return elementNotificacao.notificacaoid === elementSadt.fk_notificacaoid
                        }),
                        leitos: selectedLeitos.rows.filter((elementLeitos) => {
                            return elementNotificacao.notificacaoid === elementLeitos.fk_notificacaoid
                        })
                    }
                })
            }
        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    selectNotificacao: async (notificacaoId) => {
        try {

            const selectedNotificacao = await pool.query(notificacao.selectId, [notificacaoId])
            const selectedRh = await pool.query(rh.selectId, [notificacaoId])
            const selectedSadt = await pool.query(sadt.selectId, [notificacaoId])
            const selectedLeitos = await pool.query(leitos.selectId, [notificacaoId])

            const id = selectedNotificacao.rows[0].notificacaoid

            return {
                notificacao: selectedNotificacao.rows[0],
                rh: selectedRh.rows.filter((elementRh) => {
                    return id === elementRh.fk_notificacaoid
                }),
                sadt: selectedSadt.rows.filter((elementSadt) => {
                    return id === elementSadt.fk_notificacaoid
                }),
                leitos: selectedLeitos.rows.filter((elementSadt) => {
                    return id === elementLeitos.fk_notificacaoid
                })
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    deleteNotificacoes: async () => {
        try {

            await pool.query(rh.deleteAll)

            await pool.query(sadt.deleteAll)

            await pool.query(leitos.deleteAll)

            pool.query(notificacao.deleteAll)

            return {
                success: "Deleted all notifications successfully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    },

    deleteNotificacao: async (notificacaoId) => {
        try {

            await pool.query(rh.delete, [notificacaoId])

            await pool.query(sadt.delete, [notificacaoId])

            await pool.query(leitos.delete, [notificacaoId])

            pool.query(notificacao.delete, [notificacaoId])

            return {
                success: "Deleted notification successufully!"
            }

        } catch {
            return {
                error: "Something went wrong..."
            }
        }
    }
}

module.exports = {
    funcNotificacao
}