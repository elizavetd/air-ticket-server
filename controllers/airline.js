const { Airline } = require('../models');
const { Status } = require('../constants');

async function findAll (ctx) {
  try {
    const airlines = await Airline.find({});
    ctx.body = airlines;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function create (ctx) {
  try {
    const newAirline = new Airline(ctx.request.body);
    const savedAirline = await newAirline.save();
    ctx.body = savedAirline;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function destroy (ctx) {
  try {
    const id = ctx.params.id;
    const airlineToDelete = await Airline.findById(id);

    const deletedAirline = await airlineToDelete.remove();
    ctx.body = deletedAirline;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function update (ctx) {
  try {
    const id = ctx.params.id;
    const airlineToUpdate = await Airline.findByIdAndUpdate(id, ctx.request.body);

    const updatedAirline = await airlineToUpdate.save();
    ctx.body = updatedAirline;
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
