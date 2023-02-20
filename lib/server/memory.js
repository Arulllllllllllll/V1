const { makeInMemoryStore } = require("@adiwajshing/baileys")
const fs = require("fs");
const logg = require('pino')
const Memory = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

module.exports = { Memory }