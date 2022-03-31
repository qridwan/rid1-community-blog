// -USER , title, bio, profilepic, links: {fb, link}, posts, bookmarks

const { Schema, model, Types } = require("mongoose");
const Post = require("./Post");
const User = require("./User");
const profileSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: User, required: true },
    title: { type: Types.String, trim: true, maxLength: 100 },
    bio: { type: Types.String, trim: true, maxLength: 500 },
    profilepic: { type: String },
    links: {
      website: String,
      facebook: String,
      twitter: String,
      github: String,
    },
    posts: [
      {
        type: Types.ObjectId,
        ref: Post,
      },
    ],
    bookmarks: {
      type: Types.ObjectId,
      ref: Post,
    },
  },
  { timestamp: true }
);

const Profile = model("Profile", profileSchema, "profiles");
