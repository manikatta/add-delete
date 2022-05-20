
import { useState,useEffect } from 'react'
import React from 'react';

const List = () => {
    const [studentlist, setstudentlist] = useState([]);

    useEffect (()=>{
        fetch(" http://localhost:8000/addbooks")
            .then(res => {
            return res.json();  
        })
            .then(data=>{
            setstudentlist(data);
            console.log(data);
        })
        
      },[])
      let clickImage=(id)=>{     /// another way of updating the state
        fetch(`http://localhost:8000/add/${id}`,{  //fetch is used to access the server not only for get
            method:'DELETE',
        }).then(()=>{
          setstudentlist(studentlist.filter((value)=>value.id!==id)) 
        }).then(()=>{
            alert('DELETED Successfully')
        })
    } 

    return ( 
        <div className="list">
            <div>
                {
                    studentlist.map((val)=>{
                        return(
                            <div>
                                <h5>name: &nbsp; {val.name}</h5>
                                <h5>branch: &nbsp; {val.branch}</h5>
                                <button onClick={()=>clickImage(val.id)}>DELETE</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default List;