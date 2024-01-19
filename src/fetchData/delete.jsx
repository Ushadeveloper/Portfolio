import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams,Link } from 'react-router-dom'

export const Delete = () => {

    const [deleteValues, setDeleteValues] = useState({})
    useEffect(
        () => {

            fetch(`http://localhost:8094/api/Guest/${id}`)
                .then(response => response.json())
                .then(abc => setDeleteValues(abc))
                .catch(err => console.log(err.message));
        }
        ,
        []
    );
    const { id } = useParams();


    const handleName = (event) => {
        setDeleteValues({
            ...deleteValues,
            name: event.target.value
        })
    }

    // const handleDOB = (event) => {
    //     setDeleteValues({
    //         ...deleteValues,
    //         dob: event.target.value
    //     })
    // }

    const handleEmail = (event) => {
        setDeleteValues({
            ...deleteValues,
            email: event.target.value
        })
    }

    const handlePhone = (event) => {
        setDeleteValues({
            ...deleteValues,
            phone: event.target.value
        })
    }
    const handleAddress = (event) => {
        setDeleteValues({
            ...deleteValues,
            address: event.target.value
        })
    }

    const handleClick =  (e) => 
    {
        e.preventDefault();
      fetch(`http://localhost:8094/api/Guest/${id}`, {
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(deleteValues),
      
           })
           .then(response => response.json())
           .then(response => console.log(`Deleted Id : ${id}`,JSON.stringify(response)))
           .catch((e) => {console.log('error : ' , e.message)});

    }
    return (
        <div>
            <h1>Delete Fetch</h1>

            <div className="form-container">
                <form className="user-form">
                    <label >Name:</label>
                    <input type="text" id="name" name="name" value={deleteValues.name} onChange={handleName} />

                    {/* <label >Birth:</label>
                    <input type="date" id="dob" name="birth" value={deleteValues.dob} onChange={handleDOB} /> */}

                    <label >Email:</label>
                    <input type="text" id="email" name="email" value={deleteValues.email} onChange={handleEmail} />

                    <label >Phone:</label>
                    <input type="text" id="phone" name="phone" value={deleteValues.phone} onChange={handlePhone} />

                    <label >Address:</label>
                    <textarea name="address" rows="2" value={deleteValues.address} onChange={handleAddress}></textarea>

                 <button onClick={handleClick} type="submit">DELETE</button>
                 <Link to={"/"} ><button  type="submit" style={{marginLeft:'5px'}}>Show</button></Link>
                    
                </form>
            </div>
        </div>
    )
}
