const { Airport } = require('../models');

async function findAll (ctx) {
  const airplanes = await Airport.find({});
  ctx.body = airplanes;
}

async function create (ctx) {
  const newAirport = new Airport(ctx.request.body);
  const savedAirport = await newAirport.save();
  ctx.body = savedAirport;
}

async function destroy (ctx) {
  const id = ctx.params.id;
  const airportToDelete = await Airport.findById(id);

  const deletedAirport = await airportToDelete.remove();
  ctx.body = deletedAirport;
}

async function update (ctx) {
  const id = ctx.params.id;
  const airportToUpdate = await Airport.findByIdAndUpdate(id, ctx.request.body);

  // Update in database
  const updatedAirport = await airportToUpdate.save();
  ctx.body = updatedAirport;
}

module.exports = {
  findAll,
  create,
  destroy,
  update
};
