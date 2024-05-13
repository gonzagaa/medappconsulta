const express = require('express');
const app = express();

// Importa o módulo de rotas que você criou
const paymentRoutes = require('./Componentes/paymentRoutes'); // Ajuste o caminho conforme necessário

// Middleware para parsear requisições JSON
app.use(express.json());

// Utiliza as rotas de pagamento no caminho '/payment'
app.use('/payment', paymentRoutes);

// Configura uma rota básica para teste
app.get('/', (req, res) => {
    res.send('Servidor Express está rodando!');
});

// Define a porta e inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
