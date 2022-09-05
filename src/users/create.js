import React from 'react';
import { useForm } from 'react-hook-form';

export default function CreateUser() {
  const { register, handleSubmit, formState: { errors } } = useForm(

  );
  const onSubmit = data =>{ 

    data.isPublic = data.isPublic==="true"?true:false;
    var d = new Date(Date.now());
    data.createdAt = d.toISOString()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  fetch('http://localhost:3333/users', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  };
  console.log(errors);
  
  return (
    <div className="view-form-wrapper">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="StatusMessage" {...register("statusMessage", { maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="number" placeholder="Age" {...register("age", {required: true})}  />
      <label>Is Public</label>
      <input {...register("isPublic", { required: true })} type="radio" value="Yes" />Yes
      <input {...register("isPublic", { required: true })} type="radio" value="No" />No
      <input type="text" placeholder="Profile Url" {...register("avatarUrl", {required: true, maxLength: 80})} />
      <input type="submit" />
    </form>
    </div>
  );
}