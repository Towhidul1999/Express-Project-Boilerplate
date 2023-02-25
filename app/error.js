//Not found 

const notFoundHandler = (req, res, next) => {
    const error = new Error('Resource Not Found');
    error.status = 404;
    next(error);
};

//Global error handling

const errorHandler = (error, req, res, noxt) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message
        })
    }
    res.status(500).json({
        message: 'Something Went Wrong'
    })
};

module.exports = {
    notFoundHandler, errorHandler
}