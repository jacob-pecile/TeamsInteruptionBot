const util = require("util");
const restify = require("restify");
var builder = require("botbuilder");
var teams = require("botbuilder-teams");

var me = {
    id: 'jpecile@rlsolutions.com',
    name: 'Jacob Pecile'
};

let connector = new teams.TeamsChatConnector({
    appId: '',
    appPassword: ''
});

const server = restify.createServer();
server.listen(9090, function () {
    console.log('%s listening to %s', server.name, util.inspect(server.address()));
});

// this will receive nothing, you can put your tenant id in the list to listen
connector.setAllowedTenants([]);
// this will reset and allow to receive from any tenants
connector.resetAllowedTenants();
server.post('/api/messages', connector.listen());
var bot = new builder.UniversalBot(connector);

bot.dialog('/',function(session){
    console.log(session);
    console.log(me);
    session.send('https://youtu.be/uT4ySwoh27Q?t=115');
});