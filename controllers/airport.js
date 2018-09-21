const { Airport } = require('../models');

async function findAll (ctx) {
  const airplanes = await Airport.find({});
  ctx.body = airplanes;
}

async function create (ctx) {
  // Create New Airport from payload sent and save to database
  const newAirport = new Airport(ctx.request.body);
  const savedAirport = await newAirport.save();
  ctx.body = savedAirport;
}

async function destroy (ctx) {
  // Get id from url parameters and find Airport in database
  const id = ctx.params.id;
  const todo = await Airport.findById(id);

  // Delete todo from database and return deleted object as reference
  const deletedAirport = await todo.remove();
  ctx.body = deletedAirport;
}

async function update (ctx) {
  // Find Airport based on id, then toggle done on/off
  const id = ctx.params.id;
  const todo = await Airport.findById(id);
  todo.done = !todo.done;

  // Update todo in database
  const updatedAirport = await todo.save();
  ctx.body = updatedAirport;
}

module.exports = {
  findAll,
  create,
  destroy,
  update
};
