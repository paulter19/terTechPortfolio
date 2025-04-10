// api/get-products.js
export default async function handler(req, res) {
    const apiKey = "ieYWcKFWhePOhc949kru4giJCobYNqG7dw2VwDL8";
  
    const response = await fetch("https://api.printful.com/store/products", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }
  
    res.status(200).json(data);
  }
  
