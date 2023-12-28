import client from "./client";

const endpoint = "/listings";

const getListings = async () => {
  const res = await client.get(endpoint);
  return res;
};

export default {
  getListings,
};
