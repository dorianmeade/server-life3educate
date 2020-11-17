const assistant = require('../assistant');

exports.sendSession = async (req, res, next) => {
    try {
        res.status(200).json({ success: true, session_id: req.session });
    } catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).json({ success: false, msg: 'Internal Server Error!' });
    }
};

exports.sendMessage = async (req, res, next) => {
    try {
        const msg = await assistant.message(req.payload);

        res.status(200).json({ success: true, msg });
    } catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).json({ success: false, msg: 'Internal Server Error!' });
    }
};