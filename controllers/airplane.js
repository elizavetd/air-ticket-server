const { Airplane } = require('../models');
const { Status } = require('../constants');

async function findAll (ctx) {
  try {
    const airplanes = await Airplane.find({}).populate('airline');
    ctx.body = airplanes;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function create (ctx) {
  try {
    const newAirplane = new Airplane(ctx.request.body);
    const savedAirplane = await newAirplane.save();
    ctx.body = savedAirplane;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function destroy (ctx) {
  try {
    const id = ctx.params.id;
    const airplaneToDelete = await Airplane.findById(id);

    const deletedAirplane = await airplaneToDelete.remove();
    ctx.body = deletedAirplane;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function update (ctx) {
  try {
    const id = ctx.params.id;
    const airplaneToUpdate = await Airplane.findByIdAndUpdate(id, ctx.request.body);

    const updatedAirplane = await airplaneToUpdate.save();
    ctx.body = updatedAirplane;
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
