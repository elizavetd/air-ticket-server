const { Flight } = require('../models');
const { Status } = require('../constants');

async function findAll (ctx) {
  try {
    const flights = await Flight.find({});
    ctx.body = flights;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function create (ctx) {
  try {
    const newFlight = new Flight(ctx.request.body);
    const savedFlight = await newFlight.save();
    ctx.body = savedFlight;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function destroy (ctx) {
  try {
    const id = ctx.params.id;
    const flightToDelete = await Flight.findById(id);

    const deletedFlight = await flightToDelete.remove();
    ctx.body = deletedFlight;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function update (ctx) {
  try {
    const id = ctx.params.id;
    const flightToUpdate = await Flight.findByIdAndUpdate(id, ctx.request.body, { new: true });

    const updatedFlight = await flightToUpdate.save();
    ctx.body = updatedFlight;
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
