const express = require('express')
const routes = express.Router()

routes.get('/escolas/:inep', async (req, res) => {
    const { inep } = req.params

    let url = `http://educacao.dadosabertosbr.com/api/escola/${inep}`;
    let options = { method: 'GET' };

    try {
        const a = await fetch(url, options)
        const b = await a.json()
        res.json(b)
    } catch (error) {
        res.json(error)
    }
})

module.exports = routes