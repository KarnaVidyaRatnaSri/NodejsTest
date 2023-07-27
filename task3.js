var nodemailer=require('nodemailer');
var transport =nodemailer.createTransport({
    service:'gmail', 
    auth:{
    user:'vidyasri4751@gmail.com',
    pass:'kudbtrewhjaoycui'
    }
});
var mailOptions={
    from:'vidyasri4751@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Node-JS',
    text:'Good Morning sir-->My Redgno is 20A21A0580'
};
transport.sendMail(mailOptions, function(error, info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email sent:' + info.response);
    }
});