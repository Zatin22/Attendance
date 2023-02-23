import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'Location',
        accessor: 'location'
          
    },
    {
        Header: 'Country/State',
        accessor: (row) => {return ([`${row.country}`, `${row.state}`])} ,
        Cell: ({ row }) => (
            <div>
                {/* <span>{row.original.photo}</span> */}
                 <div style={{
                    display:"inline-flex",
                    flexDirection:"column"
                 }}>
                   <h4>{row.original.country}</h4>
                   <span>{row.original.state}</span>
                 </div>
            </div>
          ),
    },
    {
        Header: 'Mail Alias',
        accessor: 'email'
    },
    {
        Header: 'Added By',
        accessor: 'added by',
        // cell: ({value}) => {return format(new Date(value),'dd/MM//yyyy')}
    },
    {
        Header: 'Added Time',
        accessor: 'added_time',
        // cell: ({value}) => {return format(new Date(value),'dd/MM//yyyy')}
    },
    {
        Header: 'Modified Time',
        accessor: 'modifiedby'
    },
    {
        Header: 'Modified Time',
        accessor: 'modifiedtime'
    },
]