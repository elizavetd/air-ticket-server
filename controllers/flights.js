function hello (ctx) {
  const flight = ctx.request.query.flight;
  ctx.ok({ flight });
}

module.exports = {
  hello
};
