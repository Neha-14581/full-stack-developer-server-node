import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tweet: String,
  likes: Number,
  postedBy: {
    username: String
  }
}, {collection: 'tweets'});
export default schema;