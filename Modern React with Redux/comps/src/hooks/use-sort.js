import { useState } from 'react';

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const setSortColumn = (label) => {
        // check if what is clicked is current source state, or if new column
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        // this will need to know the existing state of sort
        if(sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };
    // returning the updatedConfig that has the header
    // Only sort if sortOrder && sortBy are not null
    // Make a copy of the data prop
    // Find the correct sortValue function and use it for sorting
    let sortedData = data;
    if (sortOrder && sortBy) {
        // do sorting if not null on both
        // find the correct object sorting is applied to
        const {sortValue} = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
            if (typeof ValueA === 'string') {
                return valA.localeCompare(valB) * reverseOrder;
            } else {
                return (valA - valB) * reverseOrder;
            }
        });
    }
    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }
}

export default useSort;