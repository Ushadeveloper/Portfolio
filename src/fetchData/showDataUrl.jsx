import { useState, useEffect } from "react";
import '../table.css';


const ShowDataurl = () => {



    const [empData, setEmpData] = useState([]);
    console.log('daaaata :', empData);

    
    useEffect(() => {
        fetch("http://localhost:8094/api/Guest")
            .then(response => response.json())
            .then(data => setEmpData(data));
    }, []);

    return (<>

        <h1>Data Fetch</h1>


        <table className="product-table">
            <thead className='thread'>


                <tr>
                    {/* <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th> */}
                    <th>ID</th>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Email</th> 
                    <th>Address</th>
                    <th>Phone</th>
                    
                </tr>
            </thead>
            <tbody className='tbody'>
                {empData.map((item) => {


                    return (
                        <>
                            <tr key={item.id}>

                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>   
                                <td>{item.address}</td>   
                               

                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>


    </>);

}

export default ShowDataurl;