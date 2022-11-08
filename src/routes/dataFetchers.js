const API_BASE_URL = "http://localhost:8000";

export async function getDestinationOptions() {
  const url = API_BASE_URL + "/destination-options";
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
}
