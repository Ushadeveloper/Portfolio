import { useState, useEffect } from "react";
import '../table.css';


const ShowDataurl = () => {



    const [empData, setEmpData] = useState([]);
    console.log('daaaata :', empData);

    
    useEffect(() => {
        fetch("http://localhost:8092/api")
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
                    <th>Emp Name</th>
                    <th>CNIC</th>
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
                                <td>{item.fatherName}</td>
                                <td>{item.age}</td>
                                <td>{item.phoneNo}</td>   
                               

                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>


    </>);

}

export default ShowDataurl;