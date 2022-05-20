import'./App.css'
import {useState} from 'react'



const Add = () => {

    let [name, setname] = useState('')
    let [branch, setbranch] = useState('')
    

    let submitFn=(e)=>{
        e.preventDefault();
        let data = {name, branch}
        
        fetch(' http://localhost:8000/add  ',{  
        method:'POST',
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify(data)
        }).then(()=>{
            alert('Added Successfully')
        })
    
    }



    return (
        <div className="form">
             <form action="" onSubmit={submitFn} method='POST'>
                       <label className="label" htmlFor="">Name:</label><br /><input className="inp" onChange={(e)=>setname(e.target.value)} value={name}type="name" placeholder="Enter your name"  /><br />
                       <label  className="label"htmlFor="">branch:</label><br /><input className="inp" onChange={(e)=>setbranch(e.target.value)} value={branch} type="text" placeholder="branch" /><br />
                       
                       <button>
                           submit</button>
                   </form>
        </div>
      );
}
 
export default Add;