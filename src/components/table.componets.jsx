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

    //////////////////create state tblGuest to save data in state///////////////////////////

    const [tblGuest, setTblGuest] = useState(guestData);
    // console.log('table of Guest',tblGuest);

    //////////////////create state filterGuestTbl to filter data in state///////////////////////////

    const [filterGuestTbl, setFilterGuestTbl] = useState('');
    // console.log('filter of Guest', filterGuestTbl);


    //////////////////create handleFilterChange event to trigger the input  ///////////////////////////

    const handleFilterChange = (e) => {

        setFilterGuestTbl(e.target.value)
    }
    //////////////////create filteredGuestTable  to filter the input  ///////////////////////////

    const filteredGuestTable = tblGuest.filter(guest =>
        guest.Name.toLowerCase().includes((filterGuestTbl).toLowerCase())
        // guest.Id.includes(filtergs)==='usama'
        // guest.Name.toLowerCase().includes(filtergs.toLowerCase()) ||
        // guest.Phone.includes(filtergs) ||
        // guest.Address.toLowerCase().includes(filtergs.toLowerCase())
    );

    // const [saveData, setSaveData] = useState(guestData);
    // console.log('savedata =', saveData);

    // const handleSaveChange = (e) => {
    //     setSaveData(e.target.value)
    // }


    // const handleSaveSubmit = (e) => {
    //     e.preventDefault();
    //     const newEntries = {Id: saveData.Id, Name: saveData.Name, Phone: saveData.Phone, Address: saveData.Address}
    //     setSaveData([...saveData, newEntries])

    // }
    // console.log('setsavedata  = ',setSaveData)
    //     evnt.preventDefault();
    // console.log("table "+gstbl);
    // const [filtergs, setFiltergs] = useState("");
    // console.log("filter "+filtergs);
    // const [formInputData, setformInputData] = useState(
    //     {
    //         Id: '',
    //         Name: '',
    //         Phone: '',
    //         Address: ''
    //     }
    // );
    // const handleChange = (evnt) => {
    //     const newInput = (data) => ({
    //           [evnt.target.name]: evnt.target.value 



    //         })

    //     setformInputData(newInput)
    // }


    // const handleSubmit = (evnt) => {
    //     evnt.preventDefault();
    //     const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
    //     if (checkEmptyInput) {
    //         const newData = (data) => ([...data, formInputData])
    //         setTableData(newData);
    //         const emptyInput = { 
    //              Id: '',
    //         Name: '',
    //         Phone: '',
    //         Address: '' }
    //         setformInputData(emptyInput)
    //     }
    // }

    // const handleGsChange = (e) => {
    //     setGstbl(e.target.value)

    //     Name = ""

    // }



    return (

        <>
            <h1>Guest Data</h1>
            <div className="form-container">
                {/* <form className="user-form">
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="Id" value={saveData.Id} onChange={handleSaveChange} />

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="Name" value={saveData.Name} onChange={handleSaveChange} />

                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="Phone" value={saveData.Phone} onChange={handleSaveChange} />

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="Address" rows="2" value={saveData.Address} onChange={handleSaveChange}></textarea>

                    <button value={handleSaveSubmit} type="submit">Submit</button>
                </form> */}
            </div>
            {/* <div className="form-container">
                <label ><b>ID</b></label>
                <input type="text" placeholder="Enter Guest ID" name="Id" onChange={handleChange} value={formInputData.Id} />
                <label ><b>Name</b></label>
                <input type="text" placeholder="Enter Guest Name" name="Name" onChange={handleChange} value={formInputData.Name} />

                <label ><b>Phone</b></label>
                <input type="number" placeholder="Enter Guest Phone" name="Phone" onChange={handleChange} value={formInputData.Phone} />

                <label ><b>Address</b></label>
                <input type="text" placeholder="Enter Guest Address" name="Address" onChange={handleChange} value={formInputData.Address} />

                

                <input type="submit" onClick={handleSubmit} value="Submit" />
            </div> */}


            <div className="table-container">


                <input type="text" placeholder="Search by Id, Name, Phone, or Address" value={filterGuestTbl} onChange={handleFilterChange} />

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
                        {filteredGuestTable.map(guest =>
                            <tr key={guest.Id}><td>{guest.Id}</td>
                                <td>{guest.Name}</td>
                                <td>{guest.Phone}</td>
                                <td>{guest.Address}</td></tr>)}
                    </tbody>
                </table>


                {/* <table className="product-table">
                    <thead className='thread'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {gstbl.map(guest =>
                            <tr><td>{guest.Id}</td>
                                <td>{guest.Name}</td>
                                <td>{guest.Phone}</td>
                                <td>{guest.Address}</td></tr>)}
                    </tbody>
                </table> */}

            </div>
        </>

    );
}
export default ShowTableData;