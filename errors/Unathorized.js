const CustomError = require('./customError')
const {StatusCodes} = require('http-status-codes')

class UnathorizedError extends CustomError{
    constructor(message){
        super(message)
        this.status= StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnathorizedError