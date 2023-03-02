启动本地数据库

```powerShell
 mongod --dbpath D:\mongo\server\data
```

每天晚上定时启动此项目

在启动项目之前要用 power shell 打开数据库

# API 接口

## 获取每日平均分

### Request

- Method: **GET**
- URL: `http://127.0.0.1:3000/api/averageScore`

### Response

- Array

```JS
[
  {
    '_id':'YYYY-MM-DD',
    'avgScore': number
  },
  {
    ...same
  }
]
```

## 获取每小时评分信息

### request

- Method: **GET**
- URL: `http://127.0.0.1:3000/api/countPerHour`

### response

- Array

```JS
[
  {
    "_id":"YYYY-MM-DDTXX", //example: '2023-01-25T16'
    "count":2
  },
  {
    ...same
  }
]
```

## 获取评论地区信息

### request

- Method: **GET**
- URL: `http://127.0.0.1:3000/api/place`

### response

- Array

```JS
[
  {
    "_id":"四川",
    "count":XX //example: 'count': 10
  },
  {
    ...same
  }
]
```
