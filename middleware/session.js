const assistant = require('../assistant')

module.exports = async (req, res, next) => {
        try {
            const session = await assistant.createSession({assistantId: process.env.ASSISTANT_ID}); 
        
            console.log(`the session is ${session.result.session_id}`);
            req.session = session.result.session_id;
            next()
        } catch(err){
            console.log(err)
            res.sendStatus(500)
        } 
    }
