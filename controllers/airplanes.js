function hello (ctx) {
  const airplane = ctx.request.query.airplane;
  ctx.ok({ airplane });
}

module.exports = {
  hello
};
