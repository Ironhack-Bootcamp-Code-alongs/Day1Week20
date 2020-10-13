import axios from "axios";

export const service = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function getAllProducts() {
  return service.get("products").then(({ data }) => data);
}

export const getSingleProduct = (id) =>
  service.get(`products/${id}`).then(({ data }) => data);

export function uploadImage(image) {
  const uploadData = new FormData();

  uploadData.append("image", image);
  return service
    .post("upload/image", uploadData)
    .then(({ data }) => data)
    .catch(console.error);
}

export function addMultipleImage(images) {
  const uploadData = new FormData();

  for (let image of images) {
    uploadData.append("imageArray", image);
  }

  return service.post("upload/multi", uploadData).then(console.log);
}
