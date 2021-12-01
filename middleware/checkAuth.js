module.exports = (req, res, next) => {
    const authentication = req.header('authentication');
    authentication === 'yes' ? next() : res.status(403).json({
        msg: 'This is not authenticated'
    });
}