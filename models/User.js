//-name -email -pass -profile
const { Schema, model, Types } = require("mongoose");
export const DOCUMENT_NAME = "User";
export const COLLECTION_NAME = "users";
const Profile = require("./Profile");
const userSchema = new Schema(
  {
    name: {
      type: "string",
      trim: true,
      maxLength: 30,
      require: true,
    },
    email: { type: "string", trim: true },
    password: { type: "string", require: true },
    profile: {
      type: Types.ObjectId,
      ref: Profile,
    },
  },
  {
    timestamps: true,
  }
);

const User = model(DOCUMENT_NAME, userSchema, COLLECTION_NAME);
module.exports = User;
