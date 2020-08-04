import React, {useState,useEffect} from 'react'

export default function Users() {
    const [data,setData]=useState([]);
    const [mode,setMode]=useState('online');
    useEffect(()=>{
        let url="https://jsonplaceholder.typicode.com/users"
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                setData(result);
                localStorage.setItem("users",JSON.stringify(result));
            })
        }).catch(err=>{
            setMode('offline');
            //alert("in catch block");
            let collection=localStorage.getItem("users");
            setData(JSON.parse(collection));
        })
    },[])
    return (
        <div>
            Users
            <div>
                {
                    mode==='offline'?<div>Your are in offline mode</div>:null
                }
            </div>
            {
                data.map((item)=>(
                    <ul>
                        <li><label>ID: </label>{item.id}</li>
                        <li><label>Name: </label>{item.name}</li>
                        <li><label>Email: </label>{item.email}</li>
                        <li><label>Phone: </label>{item.phone}</li>
                        <li><label>Website: </label>{item.website}</li>
                        <li><label>Company: </label>{item.company.name}</li>
                        <li><label>Address: </label>{item.address.street},&nbsp;{item.address.city}</li>
                        <hr/>
                    </ul>
                ))
            }
        </div>
    )
}
