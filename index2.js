// Conexão com o bando de dados com Pool

const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/:id', async (req, res) => {
    5
    const { id } = req.params

    try {
        const query = 'select * from empresas where nome = $1 or nome = $2';
        const params = ['Google', 'Facebook'];

        const resultado = await pool.query(query, params);
        return res.json(resultado.rows);
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);