import Searchfield from "./Searchfield";
import React from 'react';
import OutletDetail from "./OutletDetail";
import { DummyTableDataRow } from "../common/constant";

function GetSelectWithLabel({ label, list }) {
    return (
        <div className="flex gap-x-2">
            <span className="my-auto text-sm">{label}</span>
            <select className="border-2 rounded-lg h-full p-2">
                {list.map(item => {
                    return (<option>{item}</option>)
                })}
            </select>
        </div>
    )
}

function GenerateTableRows({ onclickMenu }) {
    const count = 17;
    const rows = [];
    for (var i = 0; i < 17; i++) {
        rows.push(<tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {DummyTableDataRow.EID}
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {DummyTableDataRow.CUS}
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {DummyTableDataRow.OUT}
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {DummyTableDataRow.ETY}
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {DummyTableDataRow.ENA}
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                {DummyTableDataRow.VAO}
            </th>
            <th onClick={(e) => { onclickMenu() }} className="cursor-pointer px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </th>

        </tr>);
    }
    return rows;
}

export default function Table() {
    const [openOutletDetail, setOpenOutletDetail] = React.useState(false);
    return (
        <>
            <div className="container shadow-md p-4 bg-white">
                <div className="flex flex-row justify-between py-2 grow-0">
                    <Searchfield />
                    <div className="flex flex-row gap-x-2">
                        <GetSelectWithLabel label={'Customer'} list={['All', 'Some', 'Never']} />
                        <GetSelectWithLabel label={'Outlet'} list={['All', 'Some', 'Never']} />
                        <button type="button" onClick={(e) => { setOpenOutletDetail(!openOutletDetail) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            + Add New Component
                        </button>
                    </div>

                </div>
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Equipment ID
                            </th>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Customer
                            </th>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Outlet
                            </th>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Equipment Type
                            </th>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Equipment Name
                            </th>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Valid as Of
                            </th>
                            <th className="px-6 bg-blueGray-50 text-gray-300 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-t-0 border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <GenerateTableRows
                            onclickMenu={() => {
                                setOpenOutletDetail(!openOutletDetail)
                            }} />
                    </tbody>
                </table>
                <OutletDetail openOutletDetail={openOutletDetail} setOpenOutletDetail={setOpenOutletDetail} />
            </div>
            <div className="container flex justify-end p-3 px-8">
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm space-x-3" aria-label="Pagination">
                            <a
                                href="#"
                                className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            </a>
                            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                            <a
                                href="#"
                                aria-current="page"
                                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 rounded-md relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative rounded-md inline-flex items-center px-4 py-2 border text-sm font-medium"
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden rounded-md md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                            >
                                3
                            </a>
                            <a
                                href="#"
                                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden rounded-md md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                            >
                                4
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border rounded-md border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </nav>
                    </div>
                </div>
        </>

    )
}