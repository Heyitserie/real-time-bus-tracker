async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

async function run() {
  const locations = await getBusLocations();
  setTimeout(run, 15000);
}

run();