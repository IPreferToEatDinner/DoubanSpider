const getDozen = require('./spider');
const mongoose = require('mongoose');
const { Schema } = mongoose;

(async () => {
	let DB_URL = 'mongodb://localhost:27017/douban';
	let options = { useNewUrlParser: true };

	mongoose.set('strictQuery', false);

	// 连接数据库
	await mongoose.connect(DB_URL, options).catch((err) => console.log(err));

	//创建Schema对象（约束）
	let commentSchema = new Schema({
		date: Date,
		place: String,
		score: Number,
		comment: String,
	});

	/**
	 * @description 这是douban数据库里comments集合的结构，使用create成员函数实现添加内容
	 */
	const commentModle = mongoose.model('comments', commentSchema);

	const spiderUrl = new URL(
		'https://movie.douban.com/subject/34444648/comments?start=0&limit=200&status=P&sort=time'
	);

	let arr = await getDozen(spiderUrl);

	await commentModle.insertMany(arr);
})();
