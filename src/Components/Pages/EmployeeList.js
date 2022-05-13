import React, { useMemo, useState, useEffect } from "react"

import Table from './../Table';

// examples used https://www.appsloveworld.com/fetch-data-from-api-and-display-in-table-react-js/
// https://blog.logrocket.com/complete-guide-building-smart-data-table-react/

const EmployeeList = () => {
    const [employeeslist, setemployees] = useState([])
    useEffect(() => {
        getemployees()
    }, [])
    const getemployees = () => {
        fetch("http://restapi.adequateshop.com/api/Metadata/GetEmployees")
            .then(res => res.json())
            .then(
                (result) => {                    
                    setemployees(result)
                },
                (error) => {
                    setemployees(null);
                }
            )
    }

    const columns = useMemo(
        () => [
            {
            Header: "Employee Id",
            accessor: "Id"
            },
            {
            Header: "Name",
            accessor: "Name"
            },
            {
            Header: "Address",
            accessor: "Address"
            },
            {
            Header: "City",
            accessor: "City"
            },
            {
            Header: "Zip code",
            accessor: "ZipCode"
            }
        ],
        []
      );

      return (
        <div className="App">
          <Table columns={columns} data={employeeslist} />
        </div>
      );

    // if (!employeeslist) return (<div>No Record Found</div>)
    // return (<div>
    //     <h2>Employees List Funcational Component </h2>
    //     <table className="table" >
    //         <thead>
    //             <tr>
    //                 <th>Employee Id</th>
    //                 <th>Name</th>
    //                 <th>Address</th>
    //                 <th>City</th>
    //                 <th>ZipCode</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {employeeslist.map(emp => (
    //                 <tr key={emp.Id}>
    //                     <td>{emp.Id}</td>
    //                     <td>{emp.Name}</td>
    //                     <td>{emp.Address}</td>
    //                     <td>{emp.City}</td>
    //                     <td>{emp.ZipCode}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // </div>
}
export default EmployeeList;