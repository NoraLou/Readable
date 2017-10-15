export const formatDate = (item) => {
  if (item.formattedDate) return item
  let date = new Date (item.timestamp)
  let formattedDate = date.toDateString()
  return {
    ...item,
    formattedDate
  }
}

export const voteSort = (a, b) => {
  return b.voteScore - a.voteScore
}

export const dateSort = (a, b) => {
  if (a.timestamp - b.timestamp  === 0 ) {
    return a
  } else {
    return a.timestamp > b.timestamp ? a.timestamp : b.timestamp
  }
}


