import Table from "../components/Table";


export default function Dashboard() {


    return <main className="grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense grid-rows- gap-2.5">
        <h1 className="md:col-span-full relative left-1/12">Jannes fabrik dashboard</h1>
        <section className="p-2 col-start-1 md:col-span-5 bg-blue-100">
            <h2>Stapeldiagram</h2>
            <div className="flex items-end justify-between w-10/12 mx-auto h-60 pb-10">
                <div className="h-1/4 w-8 bg-black"><div className="relative top-full">Mån 1st</div></div>
                <div className="h-4/4 w-8 bg-black"><div className="relative top-full">Tis 4st</div></div>
                <div className="h-2/4 w-8 bg-black"><div className="relative top-full">Ons 2st</div></div>
                <div className="h-3/4 w-8 bg-black"><div className="relative top-full">Tors 3st</div></div>
                <div className="h-1/4 w-8 bg-black"><div className="relative top-full">Fre 1st</div></div>
            </div>
        </section>
        <section className="p-2  md:col-span-4 bg-blue-200">
            <h2>Tårtdiagram</h2>
            <div className="bg-yellow-600 rounded-full m-auto h-56 w-56 border-2 border-gray-600"> </div>
            <div className="text-center"> Brun: 100% </div>
        </section>
        <section className="p-2 md:col-span-3 row-span-2 bg-pink-200 flex flex-col items-center gap-6">
            <h2>Visare</h2>

            <div>
                <div>Vinst</div>
                <meter value="50" min="0" low="25" optimum="100" high="75" max="100"/>
                <div>50%</div>
            </div>
            <div>
                <div>Utsläpp</div>
                <meter value="10" min="0" low="25" optimum="0" high="75" max="100"/>
                <div>10%</div>
            </div>
            <div>
                <div>Arbetsglädje</div>
                <meter value="90" min="0" low="25" optimum="100" high="75" max="100"/>
                <div>90%</div>
            </div>
        </section>
        <section className="p-2  md:col-span-7 bg-blue-200">
            <h2>Tabell</h2>
            <Table />    
        </section>
        <section className="p-2  md:col-span-2 bg-blue-100">
            <h2>Mätare</h2>
            <section className="border-2 shadow-md rounded-sm p-4 bg-amber-100 m-4 w-fit">
                <h3>Tillbud</h3>
                <span className="text-8xl text-green-500 font-mono">0</span>
            </section >
            <section className="border-2 shadow-md rounded-sm p-4 bg-amber-100 m-4 w-fit">
                <h3>Olyckor</h3>
                <span className="text-8xl text-green-500 font-mono">0</span>
            </section>
        </section>
    </main>
}