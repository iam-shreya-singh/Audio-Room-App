import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import { StreamVideoClient, User } from "@stream-io/video-react-sdk";
import * as yup from "yup";
import { PEOPLES_IMAGES } from "../../images";
import Cookies from "universal-cookie";


interface FormValues{
  username: string;
  name: string;
}

export const SignIn = () => {
    const cookies = new Cookies();
    // Define Yup validation schema
    const schema = yup.object().shape ({    
      username: yup
       .string()
       .matches(/^[a-zA-Z0-9_.@$]+$/, "Invalid Username")
       .required("Username is required"),
    name: yup.string().required("Name is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema)});

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { username, name } = data;

    const response = await fetch("https://crispy-space-broccoli-g7prq57rg7jcvp7q-3001.app.github.dev/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        name,
        image:
          PEOPLES_IMAGES[Math.floor(Math.random() * PEOPLES_IMAGES.length)],
        }),
      });

    if (!response.ok) {
      alert("Oops! Something went wrong while signing in. Please try again.");
    }

    const responseData = await response.json();
    console.log("responseData", responseData);

    const expires = new Date();
    expires.setDate(expires.getDate() + 1); // Set cookie to expire in 1 day
    cookies.set("token", responseData.token, {
        expires,
    });
    cookies.set("username", responseData.username, {
        expires,
    });
    cookies.set("name", responseData.name, {
        expires,
    });
  
  };

    return (
    <div className="sign-in"> 
    {" "}
    <h1> Welcome to AudioRoom Chats </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label>Username: </label>
      <input type="text" {...register("username")} />
      {errors.username && (
        <p style = {{color: "red" }}>{errors.username.message}</p>
      )}
      </div>
      <div>
      <label>Name: </label>
      <input type="text" {...register("name")}/>
      {errors.name && (
        <p style = {{color: "red" }}>{errors.name.message}</p>
      )}
   </div>
     <button type="submit">Sign-In</button>
    </form>
    </div>
    );
  };