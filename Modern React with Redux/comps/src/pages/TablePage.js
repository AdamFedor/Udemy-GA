import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4}
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            // To create a custom header, this looks the same as render, but that's because this is a super simple solution
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}>{fruit.color}</div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            // To create a custom header
            sortValue: (fruit) => fruit.score
        },
        {
            label: 'Score Squared',
            render: (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2
        }
    ]

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;