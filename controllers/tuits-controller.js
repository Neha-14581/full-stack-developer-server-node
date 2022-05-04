import posts from "./tuits.js";
let tuits = posts;

const tuitsController = (app) => {
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


const findAllTuits = (req, res) => {res.json(tuits);}



const createTuit = (req, res) => {
    const newTweet = req.body;
    newTweet._id = (new Date()).getTime()+'';
    newTweet.likes = 0;
    newTweet.dislikes = 0;
    newTweet.comments = 0;
    newTweet.retweet = 0;
    newTweet.userName = "XYZ";
    newTweet.handle = "xyz";
    tuits.push(newTweet);
    res.json(newTweet);
}


const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

export default tuitsController;

