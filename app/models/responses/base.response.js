const uuid = require('node-uuid')

class BaseResponse {

    constructor() {
        this.transactionId = uuid.v1()
        this.success = false
        this.alert = {
            message: null,
            type: null
        }
    }

}

module.exports = BaseResponse

