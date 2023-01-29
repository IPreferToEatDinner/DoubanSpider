const https = require('https');
const Cheerio = require('cheerio');

/**
 * @description 这是一个豆瓣爬虫，传入要爬取页面的url，如果成功，会得到与启动此脚本日期相同的最新评论，最多两百条
 * @param {URL} url
 * @returns {Promise<Array<object>>}
 */
async function getDozen(url) {
	return new Promise((resolve, reject) => {
		https.get(url, function (res) {
			//爬取的html
			let strHTML = '';

			//最终结果
			let result = [];

			//加载缓冲
			res.on('data', function (chunk) {
				strHTML += chunk;
			});

			//如果出错
			res.on('error', () => {
				throw new Error('https请求出错');
			});

			//加载完毕之后进行操作
			res.on('end', function () {
				const $ = Cheerio.load(strHTML);
				let today = new Date().toDateString();

				//用一个循环来读取
				$('#comments .comment-item').each((number, element) => {
					//临时对象
					let temp = {
						date: new Date(),
						place: '',
						score: 0,
						comment: '',
					};

					//其他信息基底
					let info = $(element)
						.children('.comment')
						.children('h3')
						.children('.comment-info')
						.children('span');

					//处理时间，如果时间是脚本启动的时间，就continue
					temp.date = new Date($(info).eq(2).text());
					if (temp.date.toDateString() !== today) {
						return true;
					}

					//处理分数
					temp.score = $(info).eq(1).attr().class.slice(7, 8);
					temp.score !== '-' ? (temp.score = ~~temp.score) : (temp.score = -1);

					//处理地址
					temp.place = $(info).eq(3).text();

					//将其塞到result里面
					result.push(temp);

					//处理评论本体
					temp.comment = $(element)
						.children('.comment')
						.children('.comment-content')
						.children('span')
						.text();

					resolve(result);
				});
			});
		});
	});
}

module.exports = getDozen;
