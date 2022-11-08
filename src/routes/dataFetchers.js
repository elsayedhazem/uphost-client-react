const API_BASE_URL = "http://localhost:8000";

export async function getDestinationOptions() {
  const url = API_BASE_URL + "/destination-options";
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
}

async function getListings(ids) {
  const url = API_BASE_URL + "/listings?ids=" + ids.join(",");
  return fetch(url).then((res) => res.json());
}

export async function getDestinationFeatures(destinationId) {
  const url = API_BASE_URL + `/destinations/${destinationId}`;
  return fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => getDestinationFeaturesFromData(json));
}

async function getDestinationFeaturesFromData(json) {
  const features = json["features"];

  const reformatted = {
    nListings: features["listingsByDescendingOccupancy"].length,
    maxPrice: Object.values(features["maxPrice"])[0].toLocaleString(),
    minPrice: Object.values(features["minPrice"])[0].toLocaleString(),
    avgPrice: parseInt(features["avgPrice"]).toLocaleString(),
    avgOccupancy: features["avgOccupancy"],
  };

  const topListings = await getListings(
    features["listingsByDescendingOccupancy"].slice(0, 5)
  );

  const reformattedTopListings = [];
  topListings.forEach((listing) => {
    reformattedTopListings.push(reformatListing(listing));
  });

  reformatted["topListings"] = reformattedTopListings;
  return reformatted;
}

function reformatListing(listing) {
  const reformatted = {
    _id: listing["_id"],
  };

  let features = listing["features"];
  const key = Object.keys(features);
  features = features[key]["0"];

  Object.keys(features).forEach((k) => {
    reformatted[k] = features[k];
  });

  return reformatted;
}
