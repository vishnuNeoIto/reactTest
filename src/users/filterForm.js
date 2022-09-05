import React from 'react';
import { useForm } from 'react-hook-form';

export default function Filter({setFilterParam,
  setSortBy,
  setOrderBy}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form >
      <input type="text" placeholder="searchName" name="searchName"   onChange={e=> setFilterParam(e.target.value)}  />
      <select {...register("SortBy")} onChange={event => setSortBy(event.target.value)}>
        <option value="age">Age</option>
        <option value="name">Name</option>
      </select>
      <select {...register("OrderBy")} onChange={event => setOrderBy(event.target.value)}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </form>
  );
}