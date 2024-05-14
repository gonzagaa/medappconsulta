const app = express();
const stripe = require("stripe")(
  "sk_test_51OmJP4HiMxD69xNjdDVABxCHgPp3oAhO1IXBrZnARfr8f6mfuZ8XuQgXK8PzQ9lhk4cyPpiHnGYcVH1kh0gThl2s00Cpy2DmdG"
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/payment-sheet", async (req, res) => {
  try {
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2023-10-16" }
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "BRL",
      customer: customer.id,
    });

    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey:
        "pk_test_51OmJP4HiMxD69xNjoxKW190dEYRDx75AyEKHE6IhVnzZBdczLKJH3SU0G69s9kgqbormh9aHEHh2N2HiV4mnWX3M00AQd4YWAj",
    });
  } catch (error) {
    console.error("Failed to create payment resources:", error);
    res.status(500).json({ error: error.message });
  }
});
