import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues{
  Username: string;
  name: string;
}

export const SignIn = () => {
    // Define Yup validation schema
    const schema = yup.object().shape ({    
      username: yup.string().required("Username is required").matches(/^[a-zA-Z0-9_]{3,15}$/, "Username must be 3-15 characters long and contain only letters, numbers, and underscores"),
      name: yup.string().required("Name is required"),
    });

    const onSubmit : (SubmitHandler<FormValues>) = (data) => {
      const {Username, name} = data;
      console.log(Username, name);
    }; 

    const {
      register, 
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({resolver: yupResolver(schema)} );

    return (
    <div className="sign-in"> 
    {" "}
    <h1> Welcome to AudioRoom Chats ... Connect, Share, and Amplify Your Voice. </h1>
    <form>
   <div onSubmit={handleSubmit(onSubmit)}>
    <label> Username: </label>
    <input type="text" {...register("Username")} />
    {errors.Username && (<p style = {{color: "red" }} > 
    errors.Username.message </p>)}
   </div>
   <div>
    <label> Name: </label>
    <input type="text" {...register("Username")}/>
   </div>
     <button type="submit"> Sign In </button>
    </form>
    </div>
    );
};