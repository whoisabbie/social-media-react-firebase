let db = {
  users: [
    {
      userId: "asd56a4sd65as4d9as8d",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-03-15T10:59:52.798Z",
      imageUrl: "image/dsafasdfsdfsdd/sdfsafd",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "Bihar, Mars",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "scream body",
      createdAt: "2020-05-03T09:30:13.250Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "asdasdqe32asdasdadsasd",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "asdasdadadasdadasd",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
};

const userDetails = {
  // Redux Data
  credentials: {
    userId: "sadfkjhfskjahfkjgfa",
    email: "user@gmail.com",
    handle: "user",
    createdAt: "2020-05-03T09:30:13.250Z",
    imageUrl: "image/dsafasdfsdfsdd/sdfsafd",
    bio: "Hello, asdasdasd",
    website: "https://user.com",
    location: "Lodon, Rajasthan",
  },
  likes: [
    {
      userHanlde: "user",
      screamId: "asdassdasdadasdsa",
    },
    {
      userHanlde: "user",
      screamId: "sdkjfsdfkh2kjhjhagsdf",
    },
  ],
};
