import {combineReducers} from 'redux';
import {
  request_posts, receive_posts,
  select_subreddit, invalidate_subreddit
} from './actions';

function selectedSubreddit(state = 'reactjs', action = {}) {
  switch (action.type) {
    case select_subreddit:
      return action.subreddit
    default :
      return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action = {}) {
  switch (action.type) {
    case invalidate_subreddit:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case request_posts:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case receive_posts:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdate: action.receivedAt
      })
    default :
      return state
  }
}

function postsBySubreddit(state = {}, action = {}) {
  switch (action.type) {
    case invalidate_subreddit:
    case receive_posts:
    case request_posts:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer











