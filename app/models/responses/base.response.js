const uuid = require('node-uuid')

class BaseResponse {

    constructor() {
        this.transactionId = uuid.v1()
        this.isSuccessful = false
        this.alert = {
            message: null,
            type: null
        }
    }

}

module.exports = BaseResponse

