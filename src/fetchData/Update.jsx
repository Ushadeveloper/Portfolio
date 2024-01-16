import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Update = () => {
    const { id } = useParams();
    const [values, setValue] = useState({

    })




    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setValue((preData) => ({
            ...preData,
            [name]: value
        }))

    }
    const getData = async () => {
        var response = await fetch(`http://localhost:8094/api/Guest/${id}`)
        var result = await response.json()
        setValue(result);


    }
    useEffect(() => {
        getData();
    }, [])
    const handleClick = () => {

    }
   
    return (
        <div>

            <div className="form-container">
                <form className="user-form">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />

                    <label htmlFor="name">Birth:</label>
                    <input type="date" id="Birth" name="Birth" value={values.dob} onChange={handleChange} />

                    <label htmlFor="name">Email:</label>
                    <input type="text" id="Email" name="Email" value={values.email} onChange={handleChange} />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="Phone" name="Phone" value={values.phone} onChange={handleChange} />

                    <label htmlFor="address">Address:</label>
                    <textarea id="Address" name="Address" rows="2" value={values.address} onChange={handleChange}></textarea>

                    <button onClick={handleClick} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
