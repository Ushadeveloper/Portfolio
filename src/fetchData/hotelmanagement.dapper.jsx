import { Link, useParams} from "react-router-dom";

import { useState, useEffect } from "react";
// import { Outlet, Link } from 'react-router-dom';


import '../table.css';
const FetchApi = () => {
 




    ////////////////////Display Data State///////////////////////

    const [hotelData, setHotelData] = useState([]);
    console.log('daaaata :', hotelData);



    ////////////////////Post Data State///////////////////////

    const [postData, setPostData] = useState(
        {
            id: 0,
            name: "",
            dob: "",
            email: "",
            phone: "",
            address: ""

        }
    );


    const handleName = (event) => {
        setPostData({
            ...postData,
            name: event.target.value
        })
    }

    const handleDOB = (event) => {
        setPostData({
            ...postData,
            dob: event.target.value
        })
    }

    const handleEmail = (event) => {
        setPostData({
            ...postData,
            email: event.target.value
        })
    }

    const handlePhone = (event) => {
        setPostData({
            ...postData,
            phone: event.target.value
        })
    }
    const handleAddress = (event) => {
        setPostData({
            ...postData,
            address: event.target.value
        })
    }

    useEffect(() => {
        fetch("http://localhost:8094/api/Guest")
            .then(response => response.json())
            .then(data => setHotelData(data));
    }, []);


    const handleSubmit = (e) => {

        //   e.preventDefault();
        console.log("post hotel:", postData);

        console.log('BEFORE FETCH ');
        fetch('http://localhost:8094/api/Guest',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),

            })
            //  .then(response => response.json())
            //  .then(response => console.log('AFTER FETCH',JSON.stringify(response)))

            .catch((e) => { console.log('error : ', e.message) });
    }

    return (

        <>
        
            <h1>Guest Data Post</h1>

            <div className="form-container">
                <form className="user-form">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" id="Name" name="Name" value={postData.name} onChange={handleName} />

                    <label htmlFor="name">Birth:</label>
                    <input type="date" id="Birth" name="Birth" value={postData.dob} onChange={handleDOB} />

                    <label htmlFor="name">Email:</label>
                    <input type="text" id="Email" name="Email" value={postData.email} onChange={handleEmail} />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="Phone" name="Phone" value={postData.phone} onChange={handlePhone} />

                    <label htmlFor="address">Address:</label>
                    <textarea id="Address" name="Address" rows="2" value={postData.address} onChange={handleAddress}></textarea>

                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
            </div>

            <div className="table-container">


                {/* <input type="text" placeholder="Search by Id, Name, Phone, or Address" onChange={handleFilterChange} /> */}

                <table className="product-table">
                    <thead className='thread'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {hotelData.map((guest, index) =>
                            <tr key={index}>
                                <td>{guest.id}</td>
                                <td>{guest.name}</td>
                                <td>{guest.dob}</td>
                                <td>{guest.phone}</td>
                                <td>{guest.address}</td>
                                <td><Link to={`update/${guest.id}`}>
                                <button type="submit" style={{ backgroundColor: 'lightskyblue', padding: '10px 12px',textAlign:'center', color: 'white', border: 'none' }} >EDIT</button>
                                </Link>
                                
                                <button style={{ backgroundColor: 'red', padding: '10px 12px', color: 'white', border: 'none' ,margin:'5px'}}>DELETE</button>
                                </td>
                                {/* <td>
                                    <Link to={`/data/${guest.id}`}>
                                        <button style={{ backgroundColor: 'black', padding: '6px 12px', color: 'white', border: 'none' }}>edit data</button>
                                    </Link>
                                </td> */}
                            </tr>)}
                    </tbody>
                </table>




            </div>

        </>
    );
}

export default FetchApi;