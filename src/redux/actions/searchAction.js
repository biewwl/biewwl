function goSearch(query) {
  return {
    type: 'SET_QUERY',
    payload: query,
  }
}

export  { goSearch };
