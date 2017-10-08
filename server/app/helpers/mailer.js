
import mailgun from 'mailgun-js';

const apiKey = process.env.APIKEY;
const domain = process.env.DOMAIN;
const dsl = process.env.DSL;
const sendMail = mailgun({ apiKey, domain });

export const sendVerificationEmail = (email, token) => {
  // Get the actual server address or stick to the localhost please
  const serverAddress = process.env.SERVERADDRESS;
  const port = process.env.PORT;
  const verificationLink = `${serverAddress}:${port}/verifyemail/${token}`;
  const message = {
    from: `Shopafric <${dsl}>`,
    to: email,
    subject: 'Please Verify your email',
    text: `Please click on the link below to verify your account ${verificationLink}`
  };

  // BOOM!!! Shoot that email
  sendMail.messages().send(message, (err, body) => {
    if (err) {
      return err;
    }
    return body;
  });
};
