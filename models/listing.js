const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/11542/11542598.png",
      set: (v) =>
        v === ""
          ? "https://cdn-icons-png.flaticon.com/512/11542/11542598.png"
          : v,
    },
  },
  price: {
    type: Number,
    min: 0,
  },
  location: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
