import {client} from '../lib/sanityClient';

export async function get() {
  const data = await client.fetch(`*[_type == "book"]`)

  if (data) {
    return {
      status: 200,
      body: {
        "pets": data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
};
