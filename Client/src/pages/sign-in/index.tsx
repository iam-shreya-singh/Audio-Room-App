import { useForm, SubmitHandler } from "react-router-hook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SignIn = () => {
    // Define Yup validation schema
    const schema = yup.object().shape ({    
      username: yup.string().required("Username is required").matches(/^[a-zA-Z0-9_]{3,15}$/, "Username must be 3-15 characters long and contain only letters, numbers, and underscores"),
      name: yup.string().required("Name is required"),
    });
    
    return (
    <div className="sign-in"> 
    {" "}
    <h1> Welcome to AudioRoom Chats ... Connect, Share, and Amplify Your Voice. </h1>
    <form>
   <div>
    <label> Username: </label>
    <input type="text" />
   </div>
   <div>
    <label> Name: </label>
    <input type="text" />
   </div>
     <button type="submit"> Sign In </button>
    </form>
    </div>
    );
};