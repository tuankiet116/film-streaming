class CustomError extends Error {
    constructor(info, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.name = 'CustomError'

        this.message = info.msg
        this.status = info.id
    }
}

module.exports = CustomError