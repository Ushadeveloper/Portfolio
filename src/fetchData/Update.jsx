import  { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Update = () => {
    const {id} = useParams();


    // const [upData, setUpData] = useState("");

    // console.log('idddd,',upData)

    // const fetchId = async () => {
    //     var response = await fetch(`http://localhost:8094/api/Guest/${id}`)
    //     var result = await response.json()
    //     setUpData(result);


    // }

    // useEffect(
    //     () => {

    //   const fetchId=      fetch(`http://localhost:8094/api/Guest/${id}`)
    //             .then(response => response.json())
    //             .then(abc => setUpData(abc))
    //             .catch(err => console.log(err.message));
    //     }
    //     ,
    //     []
    // );

    // const [putData,setPutData]= useState({})
    const [putvar, setPutVar] = useState({})
    useEffect(
        () =>
        {
   
            fetch(`http://localhost:8094/api/Guest/${id}`)//http://localhost:3000/update/2
            .then(response => response.json())
            .then(abc => setPutVar(abc))
            //.then(abc => console.log(abc))
            .catch(err => console.log(err.message) );
            // console.log('test...')
            // console.log(JSON.stringify( putvar));
        }
        ,
        []
    );
    // const getData = async () => {
    //     var response = await fetch(`http://localhost:8094/api/Guest/${id}`)
    //     var result = await response.json()
    //     setPutVar(result);


    // }
    // useEffect(() => {
    //     getData();
        
    // }, [])
    const handleName = (event) => {
        setPutVar({
            ...putvar,
            name: event.target.value
        })
    }

    const handleDOB = (event) => {
        setPutVar({
            ...putvar,
            dob: event.target.value
        })
    }

    const handleEmail = (event) => {
        setPutVar({
            ...putvar,
            email: event.target.value
        })
    }

    const handlePhone = (event) => {
        setPutVar({
            ...putvar,
            phone: event.target.value
        })
    }
    const handleAddress = (event) => {
        setPutVar({
            ...putvar,
            address: event.target.value
        })
    }


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(value);
    //     setPutVar((preData) => ({
    //         ...preData,
    //         [name]: value
    //     }))

    // }
  
   
    const handleClick =  (e) => 
    {
        e.preventDefault();
      fetch(`http://localhost:8094/api/Guest/${id}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(putvar),
      
           })
           .then(response => response.json())
           .then(response => console.log('AFTER UPDTE',JSON.stringify(response)))
           .catch((e) => {console.log('error : ' , e.message)});

    }
    return (
        <div>
            <h1>UPDAtE Fetch</h1>

            <div className="form-container">
            <form className="user-form">
                    <label >Name:</label>
                    <input type="text" id="name" name="name" value={putvar.name} onChange={handleName} />

                    <label >Birth:</label>
                    <input type="text" id="dob" name="birth"   
                     value={putvar.dob} onChange={handleDOB} />

                    <label >Email:</label>
                    <input type="text" id="email" name="email" value={putvar.email} onChange={handleEmail} />

                    <label >Phone:</label>
                    <input type="text" id="phone" name="phone" value={putvar.phone} onChange={handlePhone} />

                    <label >Address:</label>
                    <textarea  name="address" rows="2" value={putvar.address} onChange={handleAddress}></textarea>

                    <button onClick={handleClick} type="submit">UPDATE</button>
                </form>
            </div>




            {/* <table className="product-table">
                <thead className='thread'>


                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Phone</th>
                        <th>Address</th>

                    </tr>
                </thead>
                <tbody className='tbody'>
                    {upData.map((guest) => {


                        return (
                            <>
                                <tr key={guest.id}>

                                <td>{guest.id}</td>
                                <td>{guest.name}</td>
                                <td>{guest.dob}</td>
                                <td>{guest.phone}</td>
                                <td>{guest.address}</td>

                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table> */}
        </div>
    )
}
