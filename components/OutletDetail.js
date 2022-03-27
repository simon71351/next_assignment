import FileUpload from "./FileUpload"
import SmallLabelInput from "./SmallLabelInput"
import React from 'react';
import DeviceList from "./DeviceList";

export default function OutletDetail({ openOutletDetail, setOpenOutletDetail }) {
    const [openOutletList, setOpenOutletList] = React.useState(false);
    return (
        <div className={`overflow-auto top-0 space-y-12 px-6 pt-12 bottom-0 right-0 fixed w-[35vw] h-full bg-white ease-in-out z-50 duration-300 ${openOutletDetail ? "translate-x-0 " : "translate-x-full"}`}>
            <div className="relative outline outline-offset-2 outline-slate-200 rounded-lg">
                <button onClick={(e) => { setOpenOutletList(!openOutletList) }} className="justify-between w-full text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                    <div className="flex gap-x-2">
                        <svg className="text-slate-400 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <b>Outlet</b>
                    </div>

                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className={`${openOutletList ? 'opacity-100 scale-100' : 'opacity-0 scale-95 -z-50'} ease-in duration-300 absolute top-7 right-0 w-full bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}>
                    <div className="px-4 py-3">
                        <span className="block text-sm">STRO</span>
                        <span className="block text-sm font-medium text-gray-900 truncate">stro@test.com</span>
                    </div>
                    <ul className="py-1" aria-labelledby="dropdown">
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="space-y-5">
                <div className="space-x-3 space-y-3">
                    <div className="flex justify-between">
                        <h6 ><b>Energy</b> <br /> Information</h6>
                        <button onClick={(e) => { setOpenOutletDetail(!openOutletDetail) }} className={`w-8 h-8`} type='button'>
                            <svg viewBox="0 0 20 20">
                                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-2 items-end gap-x-2">
                        <SmallLabelInput label={"Equipment ID"} inputType="text" />
                        <SmallLabelInput label={"Type"} inputType="option" />
                        <SmallLabelInput label={"Equipment Name"} inputType="text" />
                        <SmallLabelInput label={"Equipment Serial No"} inputType="text" />
                        <SmallLabelInput label={"Equipment Manufacturer"} inputType="text" />
                        <SmallLabelInput label={"Equipment Modal"} inputType="text" />
                        <FileUpload className="col-span-3" />
                    </div>
                </div>
                <div className="space-x-3 space-y-3">
                    <div className="flex justify-between">
                        <h6 ><b>Equipment</b><br /> Information</h6>
                    </div>
                    <div className="grid grid-cols-3 gap-x-2 items-end ">
                        <SmallLabelInput label={"Baseline"} inputType="textWithPostfix" postFix={'kW'} />
                        <SmallLabelInput label={"Usage - low"} inputType="textWithPostfix" postFix={'kWH'} />
                        <SmallLabelInput label={"Usage - High"} inputType="textWithPostfix" postFix={'kWH'} />
                    </div>
                </div>
                <div className="space-x-3 space-y-3">
                    <div className="flex justify-between">
                        <h6 ><b>Device</b></h6>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-2 items-center gap-x-1">
                        <SmallLabelInput containerClasses={"col-span-2"} label={"Device"} inputType="option" />
                        <button type='button' className="bg-blue-500 text-white  rounded-lg text-sm h-11 text-center">Retrieve from Emily</button>
                        <div className="col-span-3">
                            <DeviceList />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-3 justify-between">
                    <button type='button' className="bg-white text-blue-500 border border-neutral-400 rounded-lg w-full text-sm h-11 text-center">Reset</button>
                    <button type='button' className="bg-blue-500 text-white rounded-lg w-full text-sm h-11 text-center">Save</button>
                </div>
            </div>

        </div>
    )
}