const getShops = async () => {
  const response = await fetch('https://boba-buddy-api.up.railway.app/');
  if (!response.ok) {
    throw new Error('Unable to retrieve data. Please try again!')
  }
  const listOfShops = await response.json();
  listOfShops.sort((a, b) => a.name.localeCompare(b.name));
  return listOfShops;
}

export { getShops }