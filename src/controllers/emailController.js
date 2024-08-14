const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

const sendWelcomeEmail = (req, res) => {
  const { email } = req.body;

  const data = {
    from: 'Welcome Team <welcome@yourdomain.com>',
    to: email,
    subject: 'Welcome to DEV@Deakin!',
    text: 'Thank you for subscribing to DEV@Deakin. We are excited to have you on board!',
  };

  mg.messages.create(process.env.MAILGUN_DOMAIN, data)
    .then(body => {
      console.log('Email sent successfully:', body);
      res.status(200).send('Welcome email sent successfully.');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email.');
    });
};

module.exports = { sendWelcomeEmail };
