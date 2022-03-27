import Head from 'next/head'
import Image from 'next/image'
import Drawer from '../components/Drawer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Table from '../components/Table'

export default function Home() {
  return (
    <div className="flex flex-row space-x-4 bg-slate-200 h-full">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Table />
        {/* <Drawer/> */}
      </div>
    </div>
  )
}
