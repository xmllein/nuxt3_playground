export default defineEventHandler(async (event) => {
  // 连接数据库，向数据库查询数据，然后返回数据
  const age = event.context.params?.age
  const query = getQuery(event)
  const body = await readBody(event)
  console.log('query', query)
  console.log('age', age)
  console.log('body', body)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, world!`,
    }),
  }
})
