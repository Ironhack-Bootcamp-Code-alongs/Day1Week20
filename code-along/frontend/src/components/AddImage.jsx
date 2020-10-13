import React, { Component } from "react";
import { addImage } from "../service";

class AddImage extends Component {
  onImageUpload = (e) => {
    console.log(e.target.files[0]);
    addImage(e.target.files[0]).then(console.log);
  };

  render() {
    return (
      <form>
        <input type="file" name="single-image" onChange={this.onImageUpload} />
      </form>
    );
  }
}

export default AddImage;
