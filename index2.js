// Conexão com o bando de dados com Pool

const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    //const { id } = req.params

    try {
        // const query = 'select * from empresas where nome = $1 or nome = $2';
        // const params = ['Google', 'Facebook'];

        // const query = 'update empresas set site = $1 where id = $2';
        // const params = ['www.cakewalk.com', 1];

        const query = `
        select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
        from empresas e 
        join filiais f on e.id = f.empresa_id
        join pessoas p on e.id = p.empresa_id;
        `

        const resultado = await pool.query(query);
        return res.json(resultado.rows); //rowCount = quantidade de registros - rows = tudo que houver no banco de dados
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);