const { ProviderManager } = require("./providerManager");
const templater = require("./templater");

const providerManager = new ProviderManager();

async function sendEmail({ to, template, templateData, cc, bcc, attachments, source }) {
  // ensure providers are loaded
  if (providerManager.getProviders().length === 0) {
    await providerManager.init();
  }

  // 1️⃣ Render templates
  const { subject, html, text } = templater.renderTemplate(template, templateData);

  // 2️⃣ Mail options
  const mailOptions = { to, cc, bcc, subject, html, text, attachments };

  // 3️⃣ Send via the requested provider (source)
  return providerManager.send(source, mailOptions);
}

module.exports = { sendEmail };
