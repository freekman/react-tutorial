import fetch from 'isomorphic-fetch';

export const request_posts = 'request_posts'
export const receive_posts = 'receive_posts'
export const select_subreddit = 'select_subreddit'
export const invalidate_subreddit = 'invalidate_subreddit'

export function selectSubreddit(subreddit) {
  return {
    type: select_subreddit,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: invalidate_subreddit,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: request_posts,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: receive_posts,
    subreddit,
    posts: json.children.map(child=>child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch=> {
    dispatch(requestPosts(subreddit))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState)=> {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

