import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    // to access config, while still having config in props
    // do not modify props for any reason
    // instead we map and return sort in new object
    const {config, data} = props;
    const {sortOrder, sortBy,sortedData, setSortColumn} = useSort(data, config);
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            // if sort value is found
            return column;
        }
        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-centered">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        }
    });
    // return <Table {...props} config={updatedConfig} />
    return <Table {...props} data={sortedData} config={updatedConfig}/>
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div><GoArrowSmallUp/><GoArrowSmallDown/></div>
    }
    if (sortOrder === null) {
        return <div><GoArrowSmallUp/><GoArrowSmallDown/></div>
    } else if (sortOrder === 'asc') {
        return <div className="text-red-600 text-xl"><GoArrowSmallUp/></div>
    } else if (sortOrder === 'desc') {
        return <div className="text-red-600 text-xl"><GoArrowSmallDown/></div>
    }
}
export default SortableTable;