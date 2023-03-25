import express from 'express'
import axios from 'axios'

const crawlRouter = express.Router()

function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  }

crawlRouter.get('/tiki/:id', async (req, res) => {
    // https://tiki.vn/api/v2/products/216174917?platform=web&spid=216174919
    const _id = req.params.id
    const {data} = await axios.get(`https://tiki.vn/api/v2/products/${_id}`)
    const {id, sku, short_description, price, original_price, thumbnail_url, description, images, brand, specifications} = data
    res.json({
        message: "Successfully",
        data: {id, sku, short_description, price, original_price, thumbnail_url, description, images, brand, specifications}
    })
})

export default crawlRouter