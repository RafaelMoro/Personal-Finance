const saveItemLocalStorage = (item) => {
  const LOCAL_STORAGE = process.env.LOCAL_STORAGE
  try{
    const stringifiedItem = JSON.stringify(item)
    localStorage.setItem(LOCAL_STORAGE, stringifiedItem)
  }catch(error) {
    console.error('error saving local storage',error)
  }
  return item
}

export { saveItemLocalStorage }