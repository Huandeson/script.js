// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3001;

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Middleware para parsear o corpo das requisições
app.use(express.json());

// Middleware de autenticação
const authenticateToken = require('./middlewares/auth');
app.use(authenticateToken);

// Roteamento
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Inicializar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
