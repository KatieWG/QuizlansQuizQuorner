const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizQuorner')
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.log('Unable to connect to MongoDB:', err)
  });

const quizSchema = mongoose.Schema({
  quizName: { type: String, required: true }, // user - user genenrated
  quizQuestions: [
    {
      question: { type: String, required: true }, // user - user generated
      correctAnswer: { type: String, required: true }, // user - user generated
      incorrectAnswers: [{ type: String, required: true }] // user - user generated
    }
  ],
  timesTaken: { type: Number, required: true }, // our end - default 0
  category: { type: String, required: true }, // user - select from list
  quizDescription: { type: String, required: true },  // user - user generated
  quizBanner: String,
  quizUpvotes: { type: Number, required: true }, // our end - default 0
  quizDownvotes: { type: Number, required: true }, // our end - default 0
  reported: { type: Boolean, required: true }, // our end - default false
  reportedTimes: { type: Number, required: true }, // our end - default 0
  createdBy: { type: String, required: true }, // user - based on userName
  aggregateScore: { type: Number, required: true } // our end - default 0
})


const userSchema = mongoose.Schema({
  userName: { type: String, required: true, index: { unique: true }}, // user - based on userName
  email: { type: String, required: true, index: { unique: true }}, // user - based on email
  admin: Boolean,
  quizHistory: [
    {
      quizId: Number, // based on quizId after completion
      quizName: String, // based on quizName after completion
      userScores: Number // add score to array after completion
    }
  ],
  friends: [String] // add or remove userId to array as user adds or removes friend
})

const Quiz = mongoose.model('Quiz', quizSchema);

const User = mongoose.model('User', userSchema);

const upVote = function (quizId) {
  return Quiz.updateOne({ "_id": quizId}, {$inc: {quizUpvotes: 1} }, {upsert: true})
};

const downVote = (quizId) => {
  return Quiz.updateOne({ "_id": quizId}, {$inc: {quizUpvotes: -1} }, {upsert: true});
}

const reportQuiz = (quizId) => {
  return Quiz.updateOne({ "_id": quizId}, {$set: {reported: true}}, {upsert: true});
}

const reportCount = (quizId) => {
  return Quiz.updateOne({ "_id": quizId}, {$inc: {reportedTimes: 1} }, {upsert: true});
}

const removeQuiz = (quizId) => {
  return Quiz.deleteOne({ "_id": quizId })
}

//what are we searching by? user/category. one has to be null
const getQuizzes = (createdBy, category, reported) => {
  if (createdBy) {
    return Quiz.find({ "createdBy": createdBy})
  }
  if (category) {
    return Quiz.find({ "category": category})
  }
  if (reported) {
    return Quiz.find({ "reported": reported})
  }
}

const getQuiz = (quizId) => {
  return Quiz.find({ "quizId": quizId})
}

const addQuiz = (newQuiz) => {
  return Quiz.create(newQuiz)
}

const addUser = (newUser) => {
  return User.create(newUser)
}

const getUser = (userId) => {
  return User.find({ "userId": userId})
}

const addFriend = (userId, friendID) => {
  return User.updateOne({ "userId": userId}, {$push: {friends: friendID}})
}

const removeFriend = (userId, friendID) => {
  return User.updateOne({ "userId": userId}, {$pull: {friends: friendID}})
}

const newQuizHistory = (userId, quizHistory) => {
  return User.updateOne({ "userId": userId}, {$push: {quizHistory: quizHistory}})
}

// const takenQuizAgain = (userId) => {
//   return User.updateOne({ "userId": userId}, {$inc: {"quizHistory.timesUserHasTaken": 1}})
// }

// const newQuizScore = (userId, userScore) => {
//   return User.updateOne({ "userId": userId}, {$push: {"quizHistory.userScores": userScore}})
// }

const getAllQuizzes = () => {
  return Quiz.find({})
}

module.exports = {
  upVote: upVote,
  downVote: downVote,
  reportQuiz: reportQuiz,
  removeQuiz: removeQuiz,
  getQuizzes: getQuizzes,
  getQuiz: getQuiz,
  addQuiz: addQuiz,
  getUser: getUser,
  addUser: addUser,
  addFriend: addFriend,
  removeFriend: removeFriend,
  newQuizHistory: newQuizHistory,
  // takenQuizAgain: takenQuizAgain,
  // newQuizScore: newQuizScore,
  getAllQuizzes: getAllQuizzes
};

// TODO:
// GET for user quizHistory
// GET for user created quizzes
// GET for admin, reported quizzes, display by timesReported
