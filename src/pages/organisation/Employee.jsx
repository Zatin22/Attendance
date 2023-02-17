import React, { useMemo } from 'react';
import {GlobalFilter} from "./GlobalFilter.jsx";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./Columns.jsx";
import "./Employee.css";
// import { GlobalFilter } from './GlobalFilter';

const Employee = () =>{
  
  const columns= useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {getTableProps,getTableBodyProps,state,setGlobalFilter,headerGroups,rows,prepareRow} = useTable({
    columns,
    data,
  },useGlobalFilter,useSortBy)

  const { globalFilter } = state;

  return (
    <>
      {/* <Navbar/> */}
        
         {/* <h1 className='y'>hhhhhh</h1> */}

         <GlobalFilter  filter={globalFilter} setFilter={setGlobalFilter}/>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {
                 headerGroups.headers.map((column) =>(
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '🔽': '🔼'):''}
                </span>
              </th>
              ))}
          </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) =>{
            prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                   {row.cells.map((cell) =>{

                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                   })

                   }
          </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Employee;