const { Airplane } = require('../models');

async function findAll (ctx) {
  const airplanes = await Airplane.find({});
  ctx.body = airplanes;
}

async function create (ctx) {
  const newAirplane = new Airplane(ctx.request.body);
  const savedAirplane = await newAirplane.save();
  ctx.body = savedAirplane;
}

async function destroy (ctx) {
  const id = ctx.params.id;
  const airportToDelete = await Airplane.findById(id);

  const deletedAirplane = await airportToDelete.remove();
  ctx.body = deletedAirplane;
}

async function update (ctx) {
  const id = ctx.params.id;
  const airportToUpdate = await Airplane.findByIdAndUpdate(id, ctx.request.body);

  // Update in database
  const updatedAirplane = await airportToUpdate.save();
  ctx.body = updatedAirplane;
}

module.exports = {
  findAll,
  create,
  destroy,
  update
};
