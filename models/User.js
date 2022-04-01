//-name -email -pass -profile
const { Schema, model, Types } = require("mongoose");
// const Profile = require("./Profile");

const userSchema = new Schema(
  {
    username: {
      type: "string",
      trim: true,
      maxLength: 15,
      require: true,
    },
    email: { type: "string", trim: true },
    password: { type: "string", require: true },
    profile: {
      type: Types.ObjectId,
      ref: 'Profile',
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema, "users");
module.exports = User;
