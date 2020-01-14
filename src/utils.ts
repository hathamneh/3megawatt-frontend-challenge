export const getFormattedDate = (date: Date) => {
  const year = date.getFullYear(),
    month = `${date.getMonth() + 1}`.padStart(2, '0'),
    day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}
