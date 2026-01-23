export default async function handler(req, res) {
  const { q, lat, lng } = req.query;

  // ✅ BACKEND ENV VARIABLE (NO VITE_)
  const USERNAME = process.env.GEONAMES_USERNAME;

  if (!USERNAME) {
    return res.status(500).json({ error: "API key missing" });
  }

  let url = "";

  if (q) {
    url = `http://api.geonames.org/searchJSON?q=${q}&featureCode=PCLI&maxRows=1&username=${USERNAME}`;
  } else if (lat && lng) {
    url = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=${USERNAME}`;
  } else {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "GeoNames fetch failed" });
  }
}
