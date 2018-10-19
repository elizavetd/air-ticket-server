const { Airport } = require('../models');
const { Status } = require('../constants');

async function findAll (ctx) {
  try {
    const airplanes = await Airport.find({});
    ctx.body = airplanes;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function create (ctx) {
  try {
    const newAirport = new Airport(ctx.request.body);
    const savedAirport = await newAirport.save();
    ctx.body = savedAirport;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function destroy (ctx) {
  try {
    const id = ctx.params.id;
    const airportToDelete = await Airport.findById(id);

    const deletedAirport = await airportToDelete.remove();
    ctx.body = deletedAirport;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function update (ctx) {
  try {
    const id = ctx.params.id;
    const airportToUpdate = await Airport.findByIdAndUpdate(id, ctx.request.body, { new: true });

    const updatedAirport = await airportToUpdate.save();
    ctx.body = updatedAirport;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

module.exports = {
  findAll,
  create,
  destroy,
  update
};
