//import posts from "./tuits.js";
//let tuits = posts;
import * as tuitsDao from "./tuits/tuits-dao.js";

const tuitsController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


const findAllTuits = async (req, res) => {
const tuits = await tuitsDao.findAllTuits()
res.json(tuits);
}



const createTuit = async (req, res) => {
    const newTweet = req.body;
    newTweet._id = (new Date()).getTime()+'';
    const insertedTweet = await tuitsDao.createTuit(newTweet);
    newTweet.likes = 0;
    newTweet.dislikes = 0;
    newTweet.comments = 0;
    newTweet.retweet = 0;
    newTweet.userName = "XYZ";
    newTweet.handle = "xyz";
    //tuits.push(newTweet);
    res.json(insertedTweet);
}


const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    //tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.send(status);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.send(status);
}

export default tuitsController;

