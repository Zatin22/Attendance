import React, { useMemo } from 'react';
import {GlobalFilter} from "./GlobalFilter.jsx";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import {COLUMNS} from "./Columns.jsx";
import "./Employee.css";
import { Checkbox } from './Checkbox.jsx';
// import { GlobalFilter } from './GlobalFilter';

const Employee = () =>{
  
  const columns= useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {getTableProps,gotoPage,selectedFlatRows,pageCount,setPageSize,getTableBodyProps,pageOptions,state,setGlobalFilter,headerGroups,page,nextPage,previousPage,canNextPage,canPreviousPage,prepareRow} = useTable({
    columns,
    data,
  },useGlobalFilter,useSortBy,usePagination, useRowSelect,
  hooks => {
    hooks.visibleColumns.push(columns => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <Checkbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
      },
      ...columns
    ])
  }
  )

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='employee'>
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
          {page.map((row) =>{
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
      <div className='pages'>
      <span>
        Page{' '}
          <strong>
            {pageIndex+1} of {pageOptions.length} 
          </strong>{' '}
      </span>
         <span style={{  }}>
           | Go to page:{' '}
            <input
               style={{ border:"none", outline:"none" }}
               type='number'
               defaultValue={pageIndex+1}
               onChange={(e) =>{
                  const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
                  gotoPage(pageNumber)
               }}
               />
         </span>
         
            <select value={pageSize} style={{marginLeft:"5px", marginRight:"5px", border:"none"}}
            onChange={(e) => setPageSize(Number(e.target.value))}
            >
               {
                [10,15,20].map((pageSize) =>(
                  <option key={pageSize} value={pageSize}>
                    show {pageSize}
                  </option>
                ))
               }
            </select>
       {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button> */}
       <button className='btnblue' onClick={() => previousPage()} disabled={!canPreviousPage}>PreviousPage</button>
       <button className='btnblue' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
       {/* <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button> */}
       </div>
    </div>
  )
}

export default Employee;