const http = require('http');
const getAverageScore = require('./DataOperation/getAverageScore');
const getCountPerHour = require('./DataOperation/getCountPerHour');
const getPlace = require('./DataOperation/getPlace');
const writeDb = require('./DataOperation/writeDb');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async function (request, response) {
	console.log('接入http请求，方法 ', request.method, ' 来自 ', request.url);

	//跨域
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
	response.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
	response.setHeader('X-Powered-By', ' 3.2.1');
	response.setHeader('Content-Type', 'application/json;charset=utf-8');

	response.statusCode = 200;
	response.setHeader('Content-Type', 'application/json; charset=utf-8');

	//这是爬虫，请勿启动
	// await writeDb();

	switch (request.url) {
		case '/':
		case '/api':
			response.setHeader('Content-Type', 'text/html; charset=utf-8');
			response.write('<h1>这里是初始界面</h1>');
			break;

		case '/api/averageScore':
			response.write(JSON.stringify(await getAverageScore()));
			break;

		case '/api/countPerHour':
			response.write(JSON.stringify(await getCountPerHour()));
			break;

		case '/api/place':
			response.write(JSON.stringify(await getPlace()));
			break;

		default:
			break;
	}
	response.end();
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
