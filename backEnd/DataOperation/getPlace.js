const mongoose = require('mongoose');
const commentModel = require('./commentModel');

async function getPlace() {
	let DB_URL = 'mongodb://127.0.0.1:27017/douban';
	let options = { useNewUrlParser: true };

	mongoose.set('strictQuery', false);

	// 连接数据库
	await mongoose.connect(DB_URL, options).catch((err) => console.log(err));

	let result = await commentModel.aggregate([
		{
			$group: {
				_id: '$place',
				count: { $sum: 1 },
			},
		},
	]);

	return result;
}

module.exports = getPlace;
