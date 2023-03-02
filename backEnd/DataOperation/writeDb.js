const getDozen = require('./spider');
const mongoose = require('mongoose');
const commentModle = require('./commentModel');

async function writeDb() {
	let DB_URL = 'mongodb://localhost:27017/douban';
	let options = { useNewUrlParser: true };

	mongoose.set('strictQuery', false);

	// 连接数据库
	await mongoose.connect(DB_URL, options).catch((err) => console.log(err));

	const spiderUrl = new URL(
		'https://movie.douban.com/subject/34444648/comments?start=0&limit=200&status=P&sort=time'
	);

	let arr = await getDozen(spiderUrl);

	await commentModle.insertMany(arr);
}

module.exports = writeDb;
