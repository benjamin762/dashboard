import { useState } from "react"


export default function Table() {
    const data = [
        {name: "Adam", points: 100},
        {name: "Inger", points: 0},
        {name: "Eva", points: 102},
    ]
    const [sort, setSort] = useState("name")

    const sortedRows = data
        .sort((a, b) => {
            if (sort == "name") {
                return a.name.localeCompare(b.name)
            } else if (sort == "points") {
                // Highest points first.
                return b.points - a.points
            }
        })
        .map((d, i) => <tr key={i}><td>{d.name}</td><td>{d.points}</td></tr>)

    return <table className="m-6 border-4 h-80 border-rose-200 text-2xl">
    <thead className="bg-rose-200">
        <tr>
            <th className="w-40"><button className="p-1 m-1 cursor-pointer rounded-sm hover:outline-2 hover:shadow-orange-900 hover:shadow-md" onClick={() => setSort("name")}>Namn { sort=="name"? "▼":""}</button></th>
            <th className="w-40"><button className="p-1 m-1 cursor-pointer rounded-sm hover:outline-2 hover:shadow-orange-900 hover:shadow-md" onClick={() => setSort("points")}>Poäng { sort=="points"? "▼":""}</button></th>
        </tr>
    </thead>
    <tbody className="bg-gray-200">
        {sortedRows}
    </tbody>
</table>
}