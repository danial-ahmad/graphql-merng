const Post = require('../../models/Post')
const postsResolver = require('./posts')
const usersResolver = require('./users')
const commentsResolver = require('./comments')
const { Subscription } = require('./posts')

module.exports = {
  Post: {
    likeCount: (parent) => {
      return parent.likes.length
    },
    commmentCount: (parent) => {
      return parent.comments.length
    }
  },
  Query: {
    ...postsResolver.Query
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...postsResolver.Mutation,
    ...commentsResolver.Mutation
  },
  Subscription: {
    ...postsResolver.Subscription
  }
}
