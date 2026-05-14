import {
    LayoutDashboard,
    UserPlus,
    Users,
    CalendarDays,
    Package,
    Pill,
    Syringe,
    BarChart3,
    Settings
} from 'lucide-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
export default function Dashboard() {
    return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

        {/* SIDEBAR */}
        <div className="w-[250px] bg-white border-r border-gray-200 flex flex-col justify-between">

            <div>

                {/* Logo */}
                
<div className="flex items-center gap-3 px-5 pt-6 mb-8">

    <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-sm">
        +
    </div>

    <div>
        <h1 className="text-xl font-bold text-gray-900 leading-none">
            MedServe
        </h1>

        <p className="text-xs font-semibold text-blue-600 mt-1">
            BARANGAY NANGCA
        </p>
    </div>

</div>
                {/* Navigation */}
                <nav className="px-4">

                    <a
                        href="/dashboard"
                       className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50 text-blue-600 text-[14px] font-semibold"
                    >
                        <LayoutDashboard size={18} />
                         Dashboard
                    </a>

                    {/* Patient */}
                    <div className="mt-7">
                        <p className="text-[11px] uppercase tracking-[1px] text-gray-400 font-semibold mb-3 px-2">
                            Patient Management
                        </p>

                        <div className="space-y-3">

                            <a
                                href="/patients/create"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <UserPlus size={18} />
                                Patient Registration
                            </a>

                            <a
                                href="/patients"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <Users size={18} />
                                Patient List
                            </a>

                            <a
                                href="/visit-history"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <CalendarDays size={18} />
                                Visit History
                            </a>
                        </div>
                    </div>

                    {/* Medicine */}
                    <div className="mt-7">
                        <p className="text-[11px] uppercase tracking-[1px] text-gray-400 font-semibold mb-3 px-2">
                            Medicine Management
                        </p>

                        <div className="space-y-3">

                            <a
                                href="/inventory"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <Package size={18} />
                                Inventory
                            </a>

                            <a
                                href="/dispensation"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <Pill size={18} />
                                Dispensation
                            </a>
                        </div>
                    </div>
 
                    {/* Immunization */}
                    <div className="mt-7">
                        <p className="text-[11px] uppercase tracking-[1px] text-gray-400 font-semibold mb-3 px-2">
                            Immunization
                        </p>

                        <a
                            href="/immunization-records"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <Syringe size={18} />
                            Immunization Records
                        </a>
                    </div>

                    {/* Reports */}
                    <div className="7-10">
                        <p className="text-[11px] uppercase tracking-[1px] text-gray-400 font-semibold mb-3 px-2">
                            Reports
                        </p>

                        <a
                            href="/health-reports"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <BarChart3 size={18} />
                            Health Reports
                        </a>
                    </div>

                    {/* Settings */}
                    <div className="mt-7">
                        <p className="text-[11px] uppercase tracking-[1px] text-gray-400 font-semibold mb-3 px-2">
                            Settings
                        </p>

                        <a
                            href="/settings"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition"
                        >
                            <Settings size={18} />
                            System Settings
                        </a>
                    </div>
                </nav>
                
            </div>

            {/* Profile */}
            <div className="p-4">

                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 text-center shadow-sm">

                    <div className="relative w-fit mx-auto mb-4">

                        <img
                            src="https://ui-avatars.com/api/?name=Juan+Dela+Cruz&background=2563eb&color=fff"
                            alt="Profile"
                            className="w-12 h-12 rounded-full shadow-md"
                        />

                        <span className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>

                    <p className="text-[11px] text-gray-500">
                        Logged in as
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mt-2">
                        Jay-an Calago
                    </h3>

                    <p className="text-[11px] text-blue-600 font-medium mt-1">
                        Barangay Health Worker
                    </p>
                </div>

                <button className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-2xl text-[15px] font-semibold transition">
                    Log Out
                </button>
            </div>
        </div>
        
        
        {/* MAIN CONTENT */}
        <div className="flex-1 px-5 py-4">

            {/* Header */}
            <div className="flex items-start justify-between mb-10">

                <div>
                    <h1 className="text-[28px] font-bold text-gray-900">
                        Health Center Dashboard
                    </h1>

                    <p className="text-[13px] text-gray-500 mt-2">
                        Monitor patient records, medicine inventory, and recent health center activities.
                    </p>
                </div>

                <div className="flex items-center gap-4">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-80 h-10 pl-14 pr-3 rounded-2xl border border-gray-200 bg-white shadow-sm text-[14px] focus:outline-none"
                        />

                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[15px] text-gray-400">
                            🔍
                        </span>
                    </div>

                    <button className="relative w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                        <span className="text-[18px]">🔔</span>

                        <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </div>

            {/* Stats */}
<div className="grid grid-cols-4 gap-5 mt-6">

    {/* Total Patients */}
    <div className="bg-white rounded-3xl px-6 py-5 border-l-4 border-blue-500 shadow-sm relative">
        

        <div className="absolute top-5 right-5 text-base opacity-50">
            👥 
        </div>

       <h2 className="text-sm font-medium text-gray-500">
            Total Patients
        </h2>

        <p className="text-[30px] leading-none font-bold text-gray-900 mt-5">
            120
        </p>
    </div>

    {/* Pending Immunizations */}
    <div className="bg-white rounded-3xl px-6 py-5 border-l-4 border-green-500 shadow-sm relative">
        
        <div className="absolute top-5 right-5 text-base opacity-50">
            💉 
        </div>

        <h2 className="text-sm font-medium text-gray-500">
            Pending Immunizations
        </h2>

        <p className="text-[30px] leading-none font-bold text-gray-900 mt-5">
            15
        </p>
    </div>

    {/* Low Stock */}
    <div className="bg-white rounded-3xl px-6 py-5 border-l-4 border-yellow-500 shadow-sm relative">
        
        <div className="absolute top-5 right-5 text-base opacity-50">
            💊
        </div>

        <h2 className="text-sm font-medium text-gray-500">
            Low Stock Medicines
        </h2>

        <p className="text-[30px] leading-none font-bold text-gray-900 mt-5">
            8
        </p>
    </div>

    {/* Near Expiry */}
    <div className="bg-white rounded-3xl px-6 py-5 border-l-4 border-red-500 shadow-sm relative">
        
        <div className="absolute top-5 right-5 text-base opacity-50">
            ⚠️
        </div>

        <h2 className="text-sm font-medium text-gray-500">
            Near Expiry Medicines
        </h2>

        <p className="text-[30px] leading-none font-bold text-gray-900 mt-5">
            5
        </p>
    </div>

</div>
            {/* LOWER CONTENT */}
<div className="grid grid-cols-3 gap-5 mt-6">

    {/* Recent Patient Visits */}
    <div className="col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

        <h2 className="text-[17px] font-semibold text-gray-900 mb-6">
            Recent Patient Visits
        </h2>

        <table className="w-full">

            <thead>
                <tr className="border-b border-gray-100">

                    <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                        Patient
                    </th>

                    <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                        Date
                    </th>

                    <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                        Reason
                    </th>

                    <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                        Action
                    </th>
                </tr>
            </thead>

            <tbody>

                <tr className="border-b border-gray-100">

                    <td className="py-5 text-[14px] text-gray-700">
                        Jay-an Calago
                    </td>

                    <td className="py-5 text-[14px] text-gray-700">
                        May 10, 2026
                    </td>

                    <td className="py-5 text-[14px] text-gray-700">
                        Checkup
                    </td>

                    <td className="p-4">
    <a
        href="/patients/1"
        className="text-blue-600 hover:underline text-[14px]"
    >
        View
    </a>    
</td>
                </tr>
            </tbody>
        </table>
    </div>

    {/* Announcements */}
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 h-fit">

        <div className="flex items-center gap-3 mb-6">

            <span className="text-[20px]">
                📢
            </span>

            <h2 className="text-[17px] font-semibold text-gray-900">
                Announcements
            </h2>
        </div>

        <div className="space-y-4">

            {/* Announcement 1 */}
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-2xl">

                <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[22px]">
                        💉
                    </div>

                    <div>
                        <p className="text-[14px] font-semibold text-gray-900">
                            Free Immunization Program
                        </p>

                        <p className="text-[13px] text-gray-500 mt-1">
                            Scheduled on May 15, 2026.
                        </p>
                    </div>
                </div>
            </div>

            {/* Announcement 2 */}
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-2xl">

                <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[22px]">
                        ⚠️
                    </div>

                    <div>
                        <p className="text-[14px] font-semibold text-gray-900">
                            Low Stock Alert
                        </p>

                        <p className="text-[13px] text-gray-500 mt-1">
                            Paracetamol inventory is running low.
                        </p>
                    </div>
                </div>
            </div>

            {/* Announcement 3 */}
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-2xl">

                <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[22px]">
                        🛠️
                    </div>

                    <div>
                        <p className="text-[14px] font-semibold text-gray-900">
                            System Maintenance
                        </p>

                        <p className="text-[13px] text-gray-500 mt-1">
                            Scheduled this weekend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Recently Dispensed */}
<div className="mt-6 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

    <h2 className="text-[17px] font-semibold text-gray-900 mb-6">
        Recently Dispensed Medicines
    </h2>

    <table className="w-full">

        <thead>
            <tr className="border-b border-gray-100">

                <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                    Medicine
                </th>

                <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                    Quantity
                </th>

                <th className="text-left py-4 text-[15px] font-semibold text-gray-800">
                    Date
                </th>
            </tr>
        </thead>

        <tbody>

            <tr className="border-b border-gray-100">

                <td className="py-5 text-[14px] text-gray-700">
                    Paracetamol
                </td>

                <td className="py-5 text-[14px] text-gray-700">
                    10
                </td>

                <td className="py-5 text-[14px] text-gray-700">
                    May 10, 2026
                </td>
            </tr>

            <tr>

                <td className="py-5 text-[14px] text-gray-700">
                    Amoxicillin
                </td>

                <td className="py-5 text-[14px] text-gray-700">
                    5
                </td>

                <td className="py-5 text-[14px] text-gray-700">
                    May 9, 2026
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </div>
    </div>
    
    )

}   