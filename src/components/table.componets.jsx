import React, { useState } from 'react';
import '../table.css';


function ShowTableData() {

    const guestData = [
        { Id: 1, Name: "Usama", Phone: 92312345678, Address: "Abbottabad" },
        { Id: 2, Name: "Mudassar", Phone: 92312345678, Address: "Abbottabad" },
        { Id: 3, Name: "Ali", Phone: 92312345678, Address: "Abbottabad" },
        { Id: 4, Name: "Hamza", Phone: 92312345678, Address: "Abbottabad" },
        { Id: 5, Name: "Abbas", Phone: 92312345678, Address: "Abbottabad" },

    ];

    const [gstbl, setGstbl] = useState(guestData);
    // console.log("table "+gstbl);
    const [filtergs, setFiltergs] = useState();
    // console.log("filter "+filtergs);


    const handleFilterChange = (e) => {
        
        setFiltergs(e.target.value)
    }

    const handleTableData = () => {
        setGstbl()
    }
    console.log(filtergs)
    const filteredTable = gstbl.filter(guest =>
 guest.Name.toLowerCase().includes((filtergs))
        // guest.Id.includes(filtergs)==='usama'
        // guest.Name.toLowerCase().includes(filtergs.toLowerCase()) ||
        // guest.Phone.includes(filtergs) ||
        // guest.Address.toLowerCase().includes(filtergs.toLowerCase())
      );


    return (

        <>
            <h1>Guest Data</h1>

            {/* <div className="form-container">
                <label for="name"><b>ID</b></label>
                <input type="text" placeholder="Enter Guest ID" name="id" required />
                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Guest Name" name="name" required />

                <label for="phone"><b>Phone</b></label>
                <input type="number" placeholder="Enter Guest Phone" name="Phone" required />

                <label for="address"><b>Address</b></label>
                <input type="text" placeholder="Enter Guest Address"  name="Address" required />

                 <label for="brand"><b>Brand</b></label>
                    <input type="text" placeholder="Enter Guest Brand" name="brand" required /> 

                <input type="submit" value="Submit" />
            </div> */}


            <div className="table-container">

                
                <input type="text" placeholder="Search by Id, Name, Phone, or Address" value={filtergs} onChange={handleFilterChange} />
              
                <table className="product-table">
                    <thead className='thread'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {filteredTable.map(guest =>
                            <tr><td>{guest.Id}</td>
                                <td>{guest.Name}</td>
                                <td>{guest.Phone}</td>
                                <td>{guest.Address}</td></tr>)}
                    </tbody>
                </table>

            </div>
        </>

    );
}
export default ShowTableData;