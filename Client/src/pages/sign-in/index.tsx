import { useForm, SubmitHandler } from "react-router-hook";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignIn = () => {
    const schema = yup.object().shape ({})
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