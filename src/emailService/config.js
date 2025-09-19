require("dotenv").config();
console.log(process.env.EMAIL_PRIMARY)
module.exports = {
  defaultProvider: process.env.EMAIL_PRIMARY || "gmail",
  emailFrom: process.env.EMAIL_FROM,

  providers: {
    gmail: {
      host: process.env.GMAIL_HOST,
      port: parseInt(process.env.GMAIL_PORT),
      secure: process.env.GMAIL_SECURE === "true",
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },

    elastic: {
      host: process.env.ELASTIC_HOST,
      port: parseInt(process.env.ELASTIC_PORT),
      secure: process.env.ELASTIC_SECURE === "true",
      user: process.env.ELASTIC_USER,
      pass: process.env.ELASTIC_PASS,
    },
    zoho: {
      host: process.env.ZOHO_HOST,
      port: parseInt(process.env.ZOHO_PORT),
      secure: process.env.ZOHO_SECURE === "true",
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
    outlook: {
      host: process.env.OUTLOOK_HOST,
      port: parseInt(process.env.OUTLOOK_PORT),
      secure: process.env.OUTLOOK_SECURE === "true",
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_PASS,
    },
    mailersend: {
      host: process.env.MAILERSEND_HOST,
      port: parseInt(process.env.MAILERSEND_PORT),
      secure: process.env.MAILERSEND_SECURE === "true",
      user: process.env.MAILERSEND_USER,
      pass: process.env.MAILERSEND_PASS,
    },
    smtp2go: {
      host: process.env.SMTP2GO_HOST,
      port: parseInt(process.env.SMTP2GO_PORT),
      secure: process.env.SMTP2GO_SECURE === "true",
      user: process.env.SMTP2GO_USER,
      pass: process.env.SMTP2GO_PASS,
    },
    mailgun: {
      host: process.env.MAILGUN_HOST,
      port: parseInt(process.env.MAILGUN_PORT),
      secure: process.env.MAILGUN_SECURE === "true",
      user: process.env.MAILGUN_USER,
      pass: process.env.MAILGUN_PASS,
    },
    mailjet: {
      host: process.env.MAILJET_HOST,
      port: parseInt(process.env.MAILJET_PORT),
      secure: process.env.MAILJET_SECURE === "true",
      user: process.env.MAILJET_USER,
      pass: process.env.MAILJET_PASS,
    },
    mailchimp: {
      host: process.env.MAILCHIMP_HOST,
      port: parseInt(process.env.MAILCHIMP_PORT),
      secure: process.env.MAILCHIMP_SECURE === "true",
      user: process.env.MAILCHIMP_USER,
      pass: process.env.MAILCHIMP_PASS,
    },
    brevo: {
      host: process.env.BREVO_HOST,
      port: parseInt(process.env.BREVO_PORT),
      secure: process.env.BREVO_SECURE === "true",
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
    postmark: {
      host: process.env.POSTMARK_HOST,
      port: parseInt(process.env.POSTMARK_PORT),
      secure: process.env.POSTMARK_SECURE === "true",
      user: process.env.POSTMARK_USER,
      pass: process.env.POSTMARK_PASS,
    },
    yandex: {
      host: process.env.YANDEX_HOST,
      port: parseInt(process.env.YANDEX_PORT),
      secure: process.env.YANDEX_SECURE === "true",
      user: process.env.YANDEX_USER,
      pass: process.env.YANDEX_PASS,
    },
  },
};
