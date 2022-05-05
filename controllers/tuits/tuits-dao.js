import tuitsModel from './tuits-model.js';
export const findAllTuits = () => tuitsModel.find();
export const createTuit = (tweet) => tuitsModel.create(tweet);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tweet) => tuitsModel.updateOne({_id: tid}, {$set: tweet})