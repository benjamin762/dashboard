

export default function Table() {


    return <table className="m-6 border-4 border-rose-200 text-2xl">
    <thead className="bg-rose-200">
        <tr>
            <th>Namn</th>
            <th>Poäng</th>
        </tr>
    </thead>
    <tbody className="bg-gray-200">
        <tr>
            <td>Adam</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Eva</td>
            <td>102</td>
        </tr>
        <tr>
            <td>Inger</td>
            <td>0</td>
        </tr>
    </tbody>
</table>
}