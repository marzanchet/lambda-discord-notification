const https = require('https');

exports.handler = async (event) => {
  const webhookURL = process.env.DISCORD_WEBHOOK_URL;
  const message = event.Records[0].Sns.Message;
  const subject = event.Records[0].Sns.Subject;

  const payload = JSON.stringify({
    content: `**${subject}**\n${message}`,
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': payload.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(webhookURL, options, (res) => {
      res.on('data', () => {
        resolve('Success');
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(payload);
    req.end();
  });
};
