const mongoose = require('mongoose');
const commentModel = require('./commentModel');

async function getAverageScore() {
	let DB_URL = 'mongodb://localhost:27017/douban';
	let options = { useNewUrlParser: true };

	mongoose.set('strictQuery', false);

	// 连接数据库
	await mongoose.connect(DB_URL, options).catch((err) => console.log(err));

	let result;

	try {
		result = await commentModel.aggregate([
			{
				$group: {
					_id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
					avgScore: { $avg: '$score' },
				},
			},
		]);
	} catch (error) {
		console.log('at calculate average score :', error);
	}
	return result;
}

module.exports = getAverageScore;