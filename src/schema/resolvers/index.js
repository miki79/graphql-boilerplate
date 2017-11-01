const counter = { count: 5 };

const resolvers = {
  Query: {
    counter() {
      return counter;
    },
  },
};

export default resolvers;
