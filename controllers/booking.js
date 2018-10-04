const { Booking } = require('../models');
const { Status } = require('../constants');

async function findAll (ctx) {
  try {
    const bookings = await Booking.find({}, '-password');
    ctx.body = bookings;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function create (ctx) {
  try {
    const newFlight = new Booking(ctx.request.body);
    const savedFlight = await newFlight.save();
    ctx.body = savedFlight;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function destroy (ctx) {
  try {
    const id = ctx.params.id;
    const bookingToDelete = await Booking.findById(id);

    const deletedBooking = await bookingToDelete.remove();
    ctx.body = deletedBooking;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function update (ctx) {
  try {
    const id = ctx.params.id;
    const bookingToUpdate = await Booking.findByIdAndUpdate(id, ctx.request.body);

    const updatedBooking = await bookingToUpdate.save();
    ctx.body = updatedBooking;
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
