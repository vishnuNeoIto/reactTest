import React, {useEffect,useState} from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom' ;
import './style.css'
import BadgeItem from "./badge";
import FilterForm from "./filterForm"


export default function UserList() {
const [users, setUsers] = useState([]);
const [pageNumber,setPageNumber] = useState(1);
const [filterName, setFilterParam] = useState('');
const [sortBy, setSortBy] = useState('name');
const [orderBy, setOrderBy] = useState('asc');

const navigate = useNavigate();

useEffect(() => {
    fetch('http://localhost:3333/users?_page='+pageNumber+'&_limit=10')
        .then((response) => response.json())
        .then((data) => setUsers(data));
},[]);

useEffect(() => {
    console.log('asdasd',users);

}, [users])
useEffect(() => {
    fetch('http://localhost:3333/users?name='+filterName+'&_page='+pageNumber+'&_limit=10')
        .then((response) => response.json())
        .then((data) => setUsers(data));

}, [filterName])
useEffect(() => {
    fetch('http://localhost:3333/users?sort='+sortBy+'&_page='+pageNumber+'&_limit=10')
        .then((response) => response.json())
        .then((data) => setUsers(data));

}, [sortBy])

useEffect(() => {
    fetch('http://localhost:3333/users?sort='+sortBy+'&_order='+orderBy+'&_page='+pageNumber+'&_limit=10')
        .then((response) => response.json())
        .then((data) => setUsers(data));

}, [orderBy])
const newUserLoad = () =>{ 
    let path = `/create`; 
    navigate(path);
  }

    return (
        <>
            <h1>Users</h1>
            <FilterForm 
            {...{
                setFilterParam,
                setSortBy,
                setOrderBy

            }}
            
            />
            <div className="badge-container">

            {users.map(user => (
                 <BadgeItem userData={user}/>
              ))}
            <BadgeItem />
                

            </div>

            <div>
            <input type="Button" color="primary" className="px-4"
            onClick={newUserLoad} value="Create New User"
              />
              
            
            </div>
        </>
    )
}
