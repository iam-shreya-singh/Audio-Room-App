import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PEOPLES_IMAGES } from "../../avatars";

interface FormValues{
  username: string;
  name: string;
}

export const SignIn = () => {
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

    const response = await fetch("https://verbose-dollop-xv4pw9vx59j2pv7v-3001.app.github.dev/auth/createUser", {
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
      }
   );

    if (!response.ok) {
      alert("Oops! Something went wrong while signing in. Please try again.");
    }

    const responseData = await response.json();
    console.log("responseData", responseData);
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