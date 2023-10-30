import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: 'APP_USR-404212168429405-100814-0deccd0b6f09ee5ef36fe7e6a21b05f8-1500511378',
  });

  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          currency_id: "ARS",
          quantity: Number(req.body.quantity),
        },
      ],
      notification_url: "https://b98e-138-121-113-13.ngrok.io/api/webhook",
      back_urls: {
        success: "http://localhost:3000/",
        // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
        // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      },
    });

    // console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    if (payment.type === 'payment') {
      const paymentId = payment['data.id']
      console.log(paymentId);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
