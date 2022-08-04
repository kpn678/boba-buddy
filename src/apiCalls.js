const getShops = async () => {
  const response = await fetch('https://dnvr-boba-buddy-api.herokuapp.com/');
  if (!response.ok) {
    throw new Error('Unable to retrieve data. Please try again!')
  }
  const listOfShops = await response.json();
  listOfShops.sort((a, b) => a.name.localeCompare(b.name));
  return listOfShops;
}

export { getShops }