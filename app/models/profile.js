'use strict'

const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)


const profileObject = {
    name: Joi.string().regex(/^[a-zA-Z]+[\s][a-zA-Z]+$/g).allow(null),
    imageUrl: Joi.string().allow(null).uri().max(1000),
    phone: Joi.string().allow(null).max(12).regex(/^\d{3}-\d{3}-\d{4}$/),
    isPhoneVisible: Joi.boolean().allow(null)
}

const schema = {
    _id: Joi.objectId(),
    profileOverrides: Joi.object(profileObject),
    isSuperAdmin: Joi.boolean().allow(null).optional()
}