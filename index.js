const { Client, LocalAuth } = require('whatsapp-web.js');

const qrcode = require('qrcode-terminal');
let Globalname = ""
let Globalsurname = ""

let emailAddress=""
let contactNumber = "";

let skills = []

let Qualfications= []

let WorkExperience =[]
let professionalSummary=""

let chat = "";
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


let counter =0;
client.on('message', async message => {
	if(message.body.toLowerCase() === 'cv') {
		await message.reply('Hello my name is Sivi, I will help you create a CV just by answering a few questions, Please give your name and surname (John, Smith)');
        counter++;    
	}
    else if(counter==1){
         [Globalname, Globalsurname] = message.body.split(" ");
         console.log(Globalname+ " "+ Globalsurname);
         message.reply(`Hello ${Globalname} Please enter your email address`)
         counter++;    
    }
    else if(counter==2){
        emailAddress = message.body
        message.reply(`No that we have your email address please share your contact number`)
        counter++;
    }
    else if(counter==3){
        contactNumber = message.body
        message.reply("Do you want to add skills? (Yes/ No)");
        counter++;
    }
    else if (counter==4 && message.body.toLowerCase()=="yes"){
        while(message.body.toLowerCase()!=="no"){
            message.reply("Add your skill?")
            skills.push(message.body)
            message.reply("Do you want to add another skill")
        }
    }
});

client.initialize();


 
