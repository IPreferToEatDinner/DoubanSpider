const mongoose = require('mongoose');
const commentModel = require('./commentModel');

async function getCountPerHour() {
	let DB_URL = 'mongodb://127.0.0.1:27017/douban';
	let options = { useNewUrlParser: true };

	mongoose.set('strictQuery', false);

	// 连接数据库
	await mongoose.connect(DB_URL, options).catch((err) => console.log(err));

	let result = await commentModel.aggregate([
		{
			$group: {
				_id: { $substr: ['$date', 0, 13] },
				count: { $sum: 1 },
			},
		},
		{
			$sort: { _id: 1 },
		},
	]);

	return result;
}

module.exports = getCountPerHour;
