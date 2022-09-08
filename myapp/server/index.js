const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const path = require('path');
const {
  upVote,
  downVote,
  reportQuiz,
  removeQuiz,
  getQuizzes,
  addQuiz,
  getUser,
  addUser,
  addFriend,
  removeFriend,
  newQuizHistory,
  // takenQuizAgain,
  // newQuizScore,
  getAllQuizzes
} = require('../database/index.js');

app.use(express.static(__dirname + './../dist/bundle.js'));
app.use(express.json());
app.use(cors());

// onAuthStateChanged(auth, (loggedInUser) => {
//   setCurrentUser(loggedInUser);
// });

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});

app.get('/quizzes/:createdBy&:category&:reported', (req, res) => { // works
  console.log('Params☄️☄️☄️☄️☄️☄️', req.params)
  getQuizzes(req.params.createdBy, req.params.category, req.params.reported)
    .then((results) => {
      res.status(200).send('Server response!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/upvote', (req, res) => { // works
  upVote(req.body.quizId)
    .then((results) => {
      res.status(201).send('upvoted!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/downvote', (req, res) => { // works
  downVote(req.body.quizId)
    .then((results) => {
      res.status(201).send('downvoted!');
    })
    .catch((err) => {
      console.error(err);
    });
});

// app.get('/reportedQuizzes', (req, res) => {
//   getQuizzes(req.body.reported)
//   .then((results) => {
//     res.status(200).send('Reported items retrieved');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

app.post('/reportQuiz', (req, res) => { // works
  reportQuiz(req.body.quizId)
    .then((results) => {
      res.status(201).send('reported!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/removeQuiz', (req, res) => { // works
  removeQuiz(req.body.quizId)
    .then((results) => {
      res.status(201).send('removed!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/addQuiz', (req, res) => { // works
  const newQuiz = {
    quizName: req.body.quizName,
    quizQuestions: req.body.quizQuestions,
    timesTaken: 0,
    category: req.body.category,
    quizDescription: req.body.quizDescription,
    quizBanner: req.body.quizBanner || '',
    quizUpvotes: 0,
    quizDownvotes: 0,
    reported: false,
    reportedTimes: 0,
    createdBy: req.body.createdBy,
    aggregateScore: 0,
  };

  addQuiz(newQuiz)
    .then((results) => {
      res.status(201).send('quiz added!');
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
});

app.get('/user/:email', (req, res) => { // works
  getUser(req.params.email)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/addFriend', (req, res) => { // works
  addFriend(req.body.email, req.body.friendEmail)
    .then((results) => {
      res.status(201).send('Friend added!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/removeFriend', (req, res) => { // works
  removeFriend(req.body.email, req.body.friendEmail)
    .then((results) => {
      res.status(201).send('Friend removed!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/addUser', (req, res) => { // works
  const newUser =  {
    userName: req.body.userName,
    email: req.body.email,
    quizHistory: [],
    friends: [],
  };

  addUser(newUser)
    .then((results) => {
      res.status(201).send('User added!');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/newQuizHistory', (req, res) => { // works
  const newHistory = {
      _id: req.body.quizId,
      userScores: req.body.score
  }

  const user = req.body.email;

  newQuizHistory(user, newHistory)
    .then((results) => {
      res.status(201).send('Added to quiz history!');
    })
    .catch((err) => {
      console.error(err);
    });
});

// app.post('/updateQuizHistory', (req, res) => {
//   takenQuizAgain(req.body.email)
//     .then((results) => {
//       newQuizScore(req.body.email, req.body.score)
//         .then((results) => {
//           res.status(201).send("Quiz history updated!");
//         })
//         .catch((err) => {
//           console.error(err);
//         })
//     })
//     .catch((err) => {
//       console.error(err);
//     })
// })

app.get('/getAllQuizzes', (req, res) => { // works
  getAllQuizzes()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
    });
});

const PORT = 4444;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
// upvote
// downvote
// reportQuiz
// removeQuiz
// getQuizzes
// addQuiz
// user
// addFriend
// removeFriend
// search?
