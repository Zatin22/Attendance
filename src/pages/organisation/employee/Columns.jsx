import { format } from 'date-fns';

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
                   <h4>{row.original.name}</h4>
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