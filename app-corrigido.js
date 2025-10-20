// app-corrigido.js

const express = require('express');
const helmet = require('helmet'); // Peça que adiciona segurança
const app = express();
const port = 3000;

// CORREÇÃO DOS PROBLEMAS 2 e 3 (DAST):
// A função helmet() adiciona cabeçalhos de segurança, como o CSP,
// e remove o "X-Powered-By" automaticamente.
app.use(helmet());

// CORREÇÃO DO PROBLEMA 1 (SAST):
// A rota perigosa com eval() foi completamente removida.
// A melhor forma de corrigir uma vulnerabilidade é eliminar a função perigosa.
app.get('/', (req, res) => {
    res.send('Aplicação Corrigida e Segura');
});

app.listen(port, () => {
    console.log(`Servidor seguro rodando na porta ${port}`);
});