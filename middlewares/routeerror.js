const notfound = (req, res, next) =>{
    const error = new Error(`404 Not fOUND :-( ${req.originalUrl}`);
    res.status(404);
    next(error);
}

module.exports = notfound;