function hello (ctx) {
  const airport = ctx.request.query.airport;
  ctx.ok({ airport });
}

module.exports = {
  hello
};
