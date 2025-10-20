// app-vulneravel.js

const express = require('express');
const app = express();
const port = 3000;

// PROBLEMA 1 (SAST): Uso da função eval(), que permite injeção de código.
// Isso foi apontado no relatório da Sprint 3.
app.get('/processar', (req, res) => {
    const dados = req.query.dados;
    eval(dados); // VULNERABILIDADE INTENCIONAL
    res.send('Dados supostamente processados.');
});

// PROBLEMA 2 e 3 (DAST): A falta de configurações de segurança
// faz com que o cabeçalho "X-Powered-By" seja enviado e não haja CSP.
// Isso também foi apontado no relatório da Sprint 3.
app.get('/', (req, res) => {
    res.send('Aplicação Vulnerável');
});

app.listen(port, () => {
    console.log(`Servidor vulnerável rodando na porta ${port}`);
});