let emailjs = require('@emailjs/nodejs'),
    fs      = require('fs'),
    path    = require('path'),
    config  = fs.existsSync(path.join(__dirname, 'config.json')) ? require('./config.json') : {...process.env};
    
module.exports = function(req, res) {
    if(!req.body) return res.end('::NO REQUEST BODY::');
    let { name,lastname,email,number,request,message,_wpcf7_recaptcha_response } = req.body, feedback = {
        "contact_form_id": 187,
        "status": "mail_sent",
        "message": "Thank you for your message. It has been sent.",
        "posted_data_hash": "a19c2472685042f35dbec4709de2af64",
        "into": "#wpcf7-f187-o1",
        "invalid_fields": []
    };
    new Promise(res=>{
        // if(_wpcf7_recaptcha_response) 
            emailjs.send(config['SERVICE_ID'], config['TEMPLATE_ID'], {
              name,lastname,email,request,message,number, to_email:config['EMAIL']
            }, {
                publicKey: config['PUBLIC_KEY'],
                privateKey: config['PRIVATE_KEY'], // optional, highly recommended for security reasons
            }).then(_=>res(feedback.message), err=>res('An error occured, try again after sometime', console.log(err)));
        // else res('Mail not delivered because you are detected to be a bot - refresh and retry');
    }).then(msg=>{
      feedback.message=msg, res.json(feedback)
    })
}