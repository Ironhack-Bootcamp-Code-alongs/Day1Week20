import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function addImage(image) {
  const uploadData = new FormData();

  uploadData.append("image", image);
  return service
    .post("upload/image", uploadData)
    .then(({ data }) => data)
    .catch(console.error);
}
