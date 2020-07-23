const chat = {
    insert: "INSERT INTO notificat.chat(id_chat, name) VALUES ($1, $2);",

    select: "SELECT id_chat, name FROM notificat.chat;",

    selectId: "SELECT id_chat, name FROM notificat.chat  WHERE id_chat = $1;",

    update: "UPDATE notificat.chat SET id_chat = $1, name = $2 WHERE id_chat = $3;",

    delete: "DELETE FROM notificat.chat WHERE id_chat = $1;",

    deleteAll: "DELETE FROM notificat.chat"
}

const email = {
    insert: "INSERT INTO notificat.email(email) VALUES ($1);",

    select: "SELECT email FROM notificat.email;",

    selectId: "SELECT email FROM notificat.email WHERE email = $1;",

    update: "UPDATE notificat.email SET email = $1 WHERE email = $2;",

    delete: "DELETE FROM notificat.email WHERE email = $1;",

    deleteAll: "DELETE FROM notificat.email"
}

const notificacao = {
    insert: "INSERT INTO notificat.notificacao(\
        notificacaoid, unidadehospitalarid, unidadehospitalarnome, \
        sigla, siglacode, areaid, areanome, areanomecod, \
        datanotificacao, usuarionotificacao, observacao) \
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);",

    select: "SELECT notificacaoid, unidadehospitalarid, unidadehospitalarnome, \
        sigla, siglacode, areaid, \
        areanome, areanomecod, datanotificacao, \
        usuarionotificacao, observacao FROM notificat.notificacao;",

    selectId: "SELECT notificacaoid, unidadehospitalarid, unidadehospitalarnome, \
        sigla, siglacode, areaid, \
        areanome, areanomecod, datanotificacao, \
        usuarionotificacao, observacao FROM notificat.notificacao \
        WHERE notificacaoid = $1;",

    update: "UPDATE notificat.notificacao \
        SET notificacaoid = $1, unidadehospitalarid = $2, unidadehospitalarnome = $3, \
        sigla = $4, siglacode = $5, areaid = $6, areanome = $7, areanomecod = $8, datanotificacao = $9, \
        usuarionotificacao = $10, observacao = $11 WHERE notificacaoid = $12;",

    delete: "DELETE FROM notificat.notificacao WHERE notificacaoid = $1",

    deleteAll: "DELETE FROM notificat.notificacao"
}

const rh = {
    insert: "INSERT INTO notificat.rh(\
        fk_notificacaoid, codigo, codsituacao, \
        nome, qtddisponivel, qtdprevista, observacao) \
        VALUES ($1, $2, $3, $4, $5, $6, $7);",

    select: "SELECT fk_notificacaoid, codigo, codsituacao, \
        nome, qtddisponivel, qtdprevista, observacao \
	    FROM notificat.rh;",

    selectId: "SELECT fk_notificacaoid, codigo, codsituacao, \
        nome, qtddisponivel, qtdprevista, observacao \
        FROM notificat.rh WHERE fk_notificacaoid = $1;",

    update: "UPDATE notificat.rh \
        SET fk_notificacaoid = $1, codigo = $2, codsituacao = $3, \
        nome = $4, qtddisponivel = $5, qtdprevista = $6, observacao = $7 \
	    WHERE fk_notificacaoid = $8;",

    delete: "DELETE FROM notificat.rh WHERE fk_notificacaoid = $1;",

    deleteAll: "DELETE FROM notificat.rh"
}

const sadt = {
    insert: "INSERT INTO notificat.sadt(\
        fk_notificacaoid, codigo, nome, checked, observacao)\
        VALUES ($1, $2, $3, $4, $5);",

    select: "SELECT fk_notificacaoid, codigo, nome, checked, observacao FROM notificat.sadt;",

    selectId: "SELECT fk_notificacaoid, codigo, nome, checked, observacao \
        FROM notificat.sadt WHERE fk_notificacaoid = $1;",

    update: "UPDATE notificat.sadt \
        SET fk_notificacaoid = $1, codigo = $2, nome = $3, checked = $4, \
        observacao = $5 WHERE fk_notificacaoid = $6;",

    delete: "DELETE FROM notificat.sadt WHERE fk_notificacaoid = $1;",

    deleteAll: "DELETE FROM notificat.sadt"
}

const leitos = {
    insert: "INSERT INTO notificat.leitos(\
        fk_notificacaoid, unidadeproducaoid, codsituacao, nome, qtd, qtdocupado, \
        qtdiso, qtdisoocupado, qtdobs, qtdobsocupado, observacao) \
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);",

    select: "SELECT fk_notificacaoid, unidadeproducaoid, codsituacao, nome, \
        qtd, qtdocupado, qtdiso, qtdisoocupado, qtdobs, qtdobsocupado, observacao \
	    FROM notificat.leitos;",

    selectId: "SELECT fk_notificacaoid, unidadeproducaoid, codsituacao, nome, \
        qtd, qtdocupado, qtdiso, qtdisoocupado, qtdobs, qtdobsocupado, observacao \
        FROM notificat.leitos WHERE fk_notificacaoid = $1;",

    update: "UPDATE notificat.leitos \
        SET fk_notificacaoid = $1, unidadeproducaoid = $2, codsituacao = $3, nome = $4, qtd = $5, \
        qtdocupado = $6, qtdiso = $7, qtdisoocupado = $8, qtdobs = $9, qtdobsocupado = $10, observacao = $11 \
	    WHERE fk_notificacaoid = $12;",

    delete: "DELETE FROM notificat.leitos WHERE fk_notificacaoid = $1;",

    deleteAll: "DELETE FROM notificat.leitos"
}

module.exports = {
    chat,
    email,
    notificacao,
    rh,
    sadt,
    leitos,
}