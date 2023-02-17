import { format } from 'date-fns';
const row=[{
    photo:"https://robohash.org/utquiaconsequatur.png?size=50x50&set=set1",
    name:"Garey"}
]
export const COLUMNS = [
    {
        Header: 'Basic information',
        accessor: 'name',
        Cell: ({ row }) => (
            <div>
                {/* <span>{row.original.photo}</span> */}
                 <div style={{
                    display:"inline-flex",
                    flexDirection:"column"
                 }}>
                   <span>{row.original.name}</span>
                   <span>{row.original.email}</span>
                 </div>
            </div>
          ),
    },
    {
        Header: 'Date of joining',
        accessor: 'date of joining',
        cell: ({value}) => {return format(new Date(value),'dd/MM//yyyy')}
    },
    {
        Header: 'Role',
        accessor: 'role'
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
]