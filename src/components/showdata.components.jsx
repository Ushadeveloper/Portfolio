import '../App.css'
const guestdata = [{
    id: 1,
    name: 'Usama Shabir',
    email: 'mathematician',

}, {
    id: 2,
    name: 'Mudassar Kesar',
    email: 'chemist',
}, {
    id: 3,
    name: 'Mohammad Abdus Salam',
    email: 'physicist',
}];

export default function ArrayShow() {

    const listItems = 
        <table className="show">
            <thead className='thread'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                {guestdata.map(x =>
                <tr><td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td></tr>)}
            </tbody>
        </table>

    
    return (

        <>
            {listItems}

        </>
    );
}