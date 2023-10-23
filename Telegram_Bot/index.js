const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

try {
    // Object to store feature descriptions
    const featureDescriptions = {
        skills: "NextCoHub offers a Skill Verification System to showcase your expertise!",
        projects: "Explore our Project Collaboration Hub to find exciting projects and collaborators!",
        events: "Join professional events and webinars on NextCoHub to expand your network!",
        mentorship: "Participate in our Mentorship Program to get guidance from experienced professionals!",
        career: "Use our Career Development Pathways tool for personalized career growth recommendations!",
        languages: "NextCoHub supports multiple languages for a global networking experience!",
        blockchain: "Explore secure credentials with our Blockchain-Based Credentialing system!",
        news: "Stay updated with personalized industry news using our AI-powered system!",
        portfolio: "Create a stunning Professional Portfolio to showcase your achievements!"
    };

    let currentFeature = null;

    bot.start((ctx) => {
        ctx.reply("Welcome to NextCoHub! Here are some of our unique features:\n\n" + Object.keys(featureDescriptions).join('\n'));
        ctx.reply("Which feature would you like to learn more about?");
    });
    
    bot.hears(/(skills|projects|events|mentorship|career|languages|blockchain|news|portfolio)/i, (ctx) => {
        const feature = ctx.match[1].toLowerCase();
        currentFeature = feature;
        ctx.reply(featureDescriptions[feature]);
        ctx.reply("Do you have more questions about this feature or would you like to learn about another feature?");
    });
    
    bot.on('text', (ctx) => {
        if (currentFeature) {
            ctx.reply("Please feel free to ask any specific questions you have about " + currentFeature);
        } else {
            ctx.reply("I'm here to provide information about NextCoHub features. Please select a feature first.");
        }
    });
    
    bot.launch();

} catch {
    console.log("unexpected command");
}
