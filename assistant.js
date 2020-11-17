require('dotenv').config()

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
    serviceUrl:  process.env.URL,
    version: '2020-09-24'
});

module.exports = assistant;