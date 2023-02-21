import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'Department Name',
        accessor: 'department'
          
    },
    {
        Header: 'Mail Alias',
        accessor: 'mail',
    },
    {
        Header: 'Added By',
        accessor: 'addedby'
    },
    {
        Header: 'Added Time',
        accessor: 'addedtime',
        cell: ({value}) => {return format(new Date(value),'dd/MM//yyyy')}
    },
    {
        Header: 'Modified By',
        accessor: 'modifiedby',
        cell: ({value}) => {return format(new Date(value),'dd/MM//yyyy')}
    },
    {
        Header: 'Modified Time',
        accessor: 'modifiedtime'
    },
]