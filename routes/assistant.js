const router = require('express').Router();

const { sendSession, sendMessage } = require('../controllers/assistant');
const session = require('../middleware/session');
const payload = require('../middleware/message');

// call to path /api/assistant/session
// req -> makesession, resp -> sendSession
router.route('/session').get(session, sendSession);


// call to path /api/assistant/message
// req -> makePayload, resp -> sendMessage
router.route('/message').post(payload, sendMessage);

module.exports = router;