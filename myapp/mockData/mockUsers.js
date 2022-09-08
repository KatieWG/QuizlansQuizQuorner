const mockUserExample =  {
  userId: 300,
  userName: "",
  email: "",
  quizHistory: [
    {
      quizId: 0,
      timesUserHasTaken: 0,
      userScores: []
    }
  ],
  friends: []
};

const mockUserList = [
  {
    userId: 301,
    userName: "PatrickTheAssistant",
    email: "pat@gmail.com",
    quizHistory: [
      {
        quizId: 1,
        quizName: "General One",
        timesUserHasTaken: 2,
        userScores: [60, 80]
      },
      {
        quizId: 2,
        quizName: "General Two",
        timesUserHasTaken: 2,
        userScores: [70, 80]
      }
    ],
    friends: [303, 304, 305]
  },
  {
    userId: 302,
    userName: "SteveTheQwizard",
    email: "tenOutOfTenAllDayLong@hotmail.com",
    quizHistory: [
      {
        quizId: 1,
        quizName: "General One",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 2,
        quizName: "General Two",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 5,
        quizName: "Animal quiz one",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 6,
        quizName: "Animal quiz number two",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 7,
        quizName: "Animal Quiz Number 3",
        timesUserHasTaken: 1,
        userScores: [100]
      }
    ],
    friends: [303, 304, 305]
  },
  {
    userId: 303,
    userName: "LizTheQuizWiz",
    email: "fourPointOhLiz@yahoo.com",
    quizHistory: [
      {
        quizId: 1,
        quizName: "General One",
        timesUserHasTaken: 3,
        userScores: [80, 90, 100]
      },
      {
        quizId: 2,
        quizName: "General Two",
        timesUserHasTaken: 2,
        userScores: [90, 100]
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        timesUserHasTaken: 3,
        userScores: [80, 90, 100]
      }
    ],
    friends: [301, 305]
  },
  {
    userId: 304,
    userName: "ZeroOutOfTen",
    email: "IForgotWhereILive@outlook.com",
    quizHistory: [
      {
        quizId: 1,
        quizName: "General One",
        timesUserHasTaken: 1,
        userScores: [0]
      },
      {
        quizId: 2,
        quizName: "General Two",
        timesUserHasTaken: 1,
        userScores: [0]
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        timesUserHasTaken: 1,
        userScores: [0]
      }
    ],
    friends: []
  },
  {
    userId: 305,
    userName: "KenJennings",
    email: "ImActuallyASupercomputerWearingClothes@gmail.com",
    quizHistory: [
      {
        quizId: 1,
        quizName: "General One",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 2,
        quizName: "General Two",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 3,
        quizName: "Science and Nature quiz one",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 4,
        quizName: "Science and Nature quiz two",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 5,
        quizName: "Animal quiz one",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 6,
        quizName: "Animal quiz number two",
        timesUserHasTaken: 1,
        userScores: [100]
      },
      {
        quizId: 7,
        quizName: "Animal Quiz Number 3",
        timesUserHasTaken: 1,
        userScores: [100]
      }
    ],
    friends: [301, 302, 303]
  }
]

module.exports = { mockUserList };
