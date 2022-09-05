import React, {useEffect,useState} from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom' ;
import { useSelector, useDispatch } from 'react-redux';
import Store from '../store'

import './style.css'
import BadgeItem from "./badge";
import FilterForm from "./filterForm"
import Pagenator from "./paginator";

const {
  actions,
} = Store;


export default function UserList() {
  const dispatch = useDispatch();

const [users, setUsers] = useState([]);
const [pageNumber,setPageNumber] = useState({'selected' :1});
const [filterName, setFilterParam] = useState('');
const [sortBy, setSortBy] = useState('age');
const [orderBy, setOrderBy] = useState('asc');
const [limit, setLimit] = useState(12); 
const [totalCount, setCount]  = useState(0);
const [totalPages,setTotalPages] = useState(0);
const navigate = useNavigate();

const fetchUsers = () => {
    let query = filterName!=''?'name_like='+filterName:''; 
    query += '&_page='+pageNumber.selected+'&_limit='+limit;
    query += '&_sort='+sortBy+'&_order='+orderBy;
    fetch('http://localhost:3333/users?'+query)
    .then((response) => {
        setCount(response.headers.get('x-total-count'));
        
        return response.json()
    })
    .then((data) => {
        setUsers(data);
    });

}
// useEffect(() => {
//     fetchUsers();
// }, [])

useEffect(() => {
  dispatch(Store.actions.UserList);
  fetchUsers();
}, [filterName,sortBy, orderBy, pageNumber])

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
                <div key={user?.id}>
                  <BadgeItem userData={user} />
                </div>
              ))}
              </div>
              <Pagenator { ...{limit,setLimit,setPageNumber,totalCount,totatlPages: totalPages}} />       

            <div>
            <input type="Button" color="primary" className="px-4"
            onClick={newUserLoad} defaultValue="Create New User"
              />
              
            
            </div>
        </>
    )
}
