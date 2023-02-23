import React, { useMemo } from 'react';
import {GlobalFilter_Location} from "./GlobalFilter_Location";
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import MOCK_DATA from "./location_mock.json";
import {COLUMNS} from "./Columns_Location";
import "./Location.css";
import { Checkbox } from './Checkbox';

const Department = () =>{
  
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
    <div className='location'
       style={{  backgroundcolor: "white"}}
    >
        
         <GlobalFilter_Location  filter={globalFilter} setFilter={setGlobalFilter}/>

      <table className='departmenttable' {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr 
            {...headerGroups.getHeaderGroupProps()}>
              {
                 headerGroups.headers.map((column) =>(
              <th
              {...column.getHeaderProps(column.getSortByToggleProps())}>
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
              <tr
              
              {...row.getRowProps()}>
                   {row.cells.map((cell) =>{

                     return <td
                        style={{
                          textalign: "center",
                        }}
                     {...cell.getCellProps()}>{cell.render('Cell')}</td>
                   })

                   }
          </tr>
            )
          })}
        </tbody>
      </table>
      <div className='pages'
      >
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
       <button
           style={{
              border: "none",
              backgroundcolor: "#556ee6",
              margin: "2px",
              fontsize: "15px",
              borderradius: "10px",
              padding: "10px",
           }}
       className='btnblue' onClick={() => previousPage()} disabled={!canPreviousPage}>PreviousPage</button>
       <button
           style={{
            border: "none",
            backgroundcolor: "#556ee6",
            margin: "2px",
            fontsize: "15px",
            borderradius: "10px",
            padding: "10px",
           }}
       className='btnblue' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
       {/* <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button> */}
       </div>
    </div>
  )
}

export default Department;