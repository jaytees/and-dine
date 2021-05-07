import axios from 'axios'

export default async function ({ store }) {
  return await axios
    .get(`${process.env.STOREFRONT_URL}products.json`, {
      params: {
        access_token: process.env.STOREFRONT_ACCESS_TOKEN,
        refresh_token: process.env.STOREFRONT_REFRESH_TOKEN,
      },
    })
    .then((resp) => store.dispatch('setProducts', resp.data.products))
    .catch((err) => console.log(err))
}
