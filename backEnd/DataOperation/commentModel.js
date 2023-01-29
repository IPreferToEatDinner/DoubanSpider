const mongoose = require('mongoose');
const { Schema } = mongoose;

//创建Schema对象（约束）
let commentSchema = new Schema({
	date: Date,
	place: String,
	score: Number,
	comment: String,
});

/**
 * @description 这是douban数据库里comments集合的结构
 */
module.exports = mongoose.model('comments', commentSchema);
