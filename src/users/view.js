import React, {useEffect,useState} from "react";
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import './style.css'

export default function CreateUser() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const params= useParams()
    const [disableSubmit, setdisableSubmit] = useState(false)
    
  useEffect(() => {
    // you can do async server request and fill up form
    console.log('location',params);

    let query = "/"+params?.id
    fetch('http://localhost:3333/users'+query)
    .then((response) => response.json())
    .then((data) => {
        reset({
            id: data.id,
            name: data.name,
            age: data.age,
            statusMessage: data.statusMessage,
            email: data.email,
            isPublic: data.isPublic?'true':'false'
          });
    });

  }, [params, reset]);

  const notify = () => toast("Wow so easy!");
  const onSubmit = data =>{
    setdisableSubmit(true);
    data.isPublic = data.isPublic==="true"?true:false;

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  fetch('http://localhost:3333/users/'+params?.id, requestOptions)
      .then(response => response.json())
      .then(data => {
        notify();
    });
  };
  console.log(errors);
  
  return (
    <div className="view-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} >
        <label>Name</label>
        <input type="text" placeholder="First name" {...register("name", {required: true, maxLength: 80})} />
        <label>Status</label>
        <input type="text" placeholder="StatusMessage" {...register("statusMessage", { maxLength: 100})} />
        <label>Email</label>
        <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
        <label>Age</label>
        <input type="number" placeholder="Age" {...register("age", {required: true})}  />
        <label>Is Public</label>
        <input {...register("isPublic", { required: true })} type="radio" value="true" />Yes
        <input {...register("isPublic", { required: true })} type="radio" value="false" />No

        <input type="submit" value="Update" disabled={disableSubmit}/>
        
        </form>
    </div>
  );
}