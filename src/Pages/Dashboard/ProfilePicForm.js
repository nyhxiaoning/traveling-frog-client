import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import config from "../../config";

const ProfilePicForm = ({ email }) => {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState();

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify({
      access_token: "123", user: {
        email: "154@qq.com"
      }
    }))
    const email = JSON.parse(localStorage.getItem("data")).user.email;
    // fetch(`${config.baseUrl}/users/${email}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(({ error, data }) => {
    //     // console.log(data)
    //     setImage(data.user.image);
    //   });
  }, []);
  //TODO: remove ALL alerst!!! 
  const onSubmit = (data, e) => {
    const formData = new FormData();
    const file = document.querySelector('input[name="image"]');
    formData.append("image", file.files[0]);
    // fetch(`${config.baseUrl}/users/image/${email}`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setImage(data.user.image);
    //   });
    setTimeout(() => {
      alert("Updated!")
      e.target.reset()
    }, 1000)
  };

  return (
    <div>
      <div>
        <img src={image} style={{ "height": 200 }} alt="pic" />
      </div>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="profile-image"
          type="file"
          name="image"
          accept="image/jpeg"
          ref={register}
        ></input>
        <button className="btn btn-outline-primary" type="submit">Save</button>
      </form>
    </div>
  );
};
export default ProfilePicForm;
