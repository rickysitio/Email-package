// const nodemailer = require("nodemailer");
// const { providers } = require("../config");

// console.log("provider-->",providers.gmail)
// class SmtpProvider {
//   constructor() {
//     this.name = "gmail";
//     this.transporter = nodemailer.createTransport({
//       host: providers.gmail.host,
//       port: Number(providers.gmail.port),
//       secure: providers.gmail.secure === true || providers.gmail.secure === 'true',
//       auth: {
//         user: providers.gmail.user,
//         pass: providers.gmail.pass
//       }
//     });
//   }

//   async init() {
//     return this.transporter.verify(); // verify connection
//   }

//   async send(mail) {
//     return this.transporter.sendMail({
//       from: providers.gmail.user,
//       ...mail
//     });
//   }
// }

// module.exports = { SmtpProvider };


const nodemailer = require("nodemailer");

class SmtpProvider {
  constructor(cred) {
    this.source = cred.source; 
    this.user = cred.user;

    this.transporter = nodemailer.createTransport({
      host: cred.host,
      port: Number(cred.port),
      secure: cred.secure === true || cred.secure === 'true',
      auth: {
        user: cred.user,
        pass: cred.pass
      }
    });
  }

  async init() {
    return this.transporter.verify();
  }

  async send(mail) {
    return this.transporter.sendMail({
      from: this.user,
      ...mail
    });
  }
}

module.exports = { SmtpProvider };
