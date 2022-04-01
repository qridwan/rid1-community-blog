// post, user, body, replies
const { Schema, Types, model } = require("mongoose");
const Post = require("./Post");
const User = require("./User");
const commentSchema = new Schema(
  {
    post: {
      type: Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    body: {
      type: String,
      trim: true,
      required: true,
    },
    replies: {
      body: {
        type: String,
        required: true,
      },
      user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  },
  { timestamp: true }
);

const Comment = model("Comment", commentSchema, "comments");

module.exports = Comment;
