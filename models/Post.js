//title, body, author, tags, thumbnail, readTime, likes, dislikes, comments

const { Schema, Types, model } = require("mongoose");
const User = require("./User");
const Comment = require("./Comment");
const postSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 150,
    },
    body: { type: String, required: true },
    author: { type: Types.ObjectId, ref: 'User', required: true },
    tags: {
      type: [String],
      required: true,
    },
    thumbnail: String,
    readTime: String,
    likes: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ],
    dislikes: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamp: true }
);

const Post = model("Post", postSchema, "posts");

module.exports = Post;
