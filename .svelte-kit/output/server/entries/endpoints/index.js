import sanityClient from "@sanity/client";
const api = {
  projectId: "ppsg7ml5",
  dataset: "production"
};
const { projectId, dataset } = api;
const client = sanityClient({
  projectId,
  dataset,
  apiVersion: "2021-10-21",
  useCdn: true
});
async function get() {
  const data = await client.fetch(`*[_type == "book"]`);
  if (data) {
    return {
      status: 200,
      body: {
        "pets": data
      }
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
export { get };
