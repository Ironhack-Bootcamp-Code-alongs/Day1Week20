import React, { Component } from "react";
import { uploadImage, addMultipleImage } from "../service";

function AddProduct({ addImage }) {
  const handleImageUpload = (e) => {
    console.log("The file to be uploaded is", e.target.files[0]);
    uploadImage(e.target.files[0])
      .catch(console.error)
      .then((res) => addImage(res));
  };

  const handleMultipleImages = (e) => {
    console.log(e.target.files);
    addMultipleImage(e.target.files);
  };

  return (
    <>
      <form>
        <input type="file" onChange={handleImageUpload} />
        <br />
        <input type="file" multiple onChange={handleMultipleImages} />
        <button type="submit">Submit</button>
      </form>{" "}
    </>
  );
}

// class AddProduct extends Component {
//   state = {
//     imageUrl: "",
//   };

//   handleImageUpload = (e) => {
//     console.log("The file to be uploaded is", e.target.files[0]);
//     uploadImage(e.target.files[0])
//       .catch(console.error)
//       .then((imageUrl) => this.setState({ imageUrl }));
//   };

//   render() {
//     return (
//       <>
//         <form>
//           <input type="file" onChange={this.handleImageUpload} />
//           <button type="submit">Submit</button>
//         </form>{" "}
//       </>
//     );
//   }
// }

export default AddProduct;
