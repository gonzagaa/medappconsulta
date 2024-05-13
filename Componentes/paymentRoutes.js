const express = require('express');
const router = express.Router(); // Usar router em vez de app
const stripe = require('stripe')('sk_test_51OmJP4HiMxD69xNjdDVABxCHgPp3oAhO1IXBrZnARfr8f6mfuZ8XuQgXK8PzQ9lhk4cyPpiHnGYcVH1kh0gThl2s00Cpy2DmdG');

// Middleware para parsear JSON no corpo das requisições
router.use(express.json()); // Atualizado para usar express.json()

// Rota de teste para verificar se o servidor está operacional
router.get('/', (req, res) => {
    res.send('Rotas de pagamento prontas!');
});

// Endpoint para criar uma intenção de pagamento
router.post('/api/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body; // Recebe o valor do pagamento
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'brl',
            payment_method_types: ['card'],
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Erro ao criar intenção de pagamento:', error.message);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router; // Exporta o router

