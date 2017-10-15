export const formatDate = (item) => {
  if (item.formattedDate) return item
  let date = new Date (item.timestamp)
  let formattedDate = date.toDateString()
  return {
    ...item,
    formattedDate
  }
}




