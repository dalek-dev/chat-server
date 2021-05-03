const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    online:{
        type: Boolean,
        required: false
    }
});

UsuarioSchema.method('toJson', function(){
    const {__v, _id, password, ...object} = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Usuario', UsuarioSchema);