const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
 Name: {
    type: String,
    require:true},
  Name: {
      type: String,
      required: true
  },
   Phone:{
       type: String,
       require: true
   }
  
});

module.exports = mongoose.model('detail', detailschema);
