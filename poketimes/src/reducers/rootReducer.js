import { DELETE_POST } from '../constants';

const initState = {
  posts: [
    {
      id: '1',
      title: 'Squirtle Laid an Egg',
      body:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'
    },
    {
      id: '2',
      title: 'Charmander Laid an Egg',
      body:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'
    },
    {
      id: '3',
      title: 'a Helix Fossil was Found',
      body:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'
    }
  ]
};

const rootReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.payload)]
      };
    default:
      return state;
  }
};

export default rootReducer;
