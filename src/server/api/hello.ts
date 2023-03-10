export default defineEventHandler((event) => {
  // 连接数据库，向数据库查询数据，然后返回数据
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, world!',
    }),
  }
})
