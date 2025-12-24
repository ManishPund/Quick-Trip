module.exports.geocode = async (location, country) => {
  const query = `${location}, ${country}`;

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    query
  )}&key=${process.env.OPENCAGE_KEY}&limit=1`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.results || !data.results.length) {
    throw new Error("Location not found");
  }

  const { lat, lng } = data.results[0].geometry;
  return { lat, lng };
};
