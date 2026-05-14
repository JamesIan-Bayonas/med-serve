import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function PatientProfile({ patient }) {
    const p = patient || {
        id: 1,
        name: 'aflnla',
        age: 20,
        gender: 'Male',
        height: '36.00',
        weight: '40.00',
        reason_for_checkup: 'nlsbnfla'
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <Head title={`Patient Profile - ${p.name}`} />

            <div className="max-w-4xl mx-auto">
                
                {/* --- TWEAKED MEDSERVE BRANDING HEADER --- */}
                {/* Reduced bottom margin from mb-10 to mb-8 */}
                <div className="flex items-center justify-center sm:justify-start mb-8">
                    {/* Slightly smaller logo icon */}
                    <div className="bg-blue-600 rounded-lg p-2 flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        {/* Slightly smaller text */}
                        <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-none">MedServe</h2>
                        <p className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mt-0.5">Barangay Nangca</p>
                    </div>
                </div>
                {/* -------------------------------- */}

                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-3xl font-bold text-gray-900">Patient Profile</h1>
                    <Link
                        href="/patients"
                        className="mt-4 sm:mt-0 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Patients List
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
                    <div className="px-6 py-5 border-b border-gray-200 bg-white">
                        <h3 className="text-lg leading-6 font-semibold text-gray-900">Medical Record Details</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal information, physical metrics, and checkup history.</p>
                    </div>

                    <div className="px-0">
                        <dl className="divide-y divide-gray-100">
                            
                            <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-gray-50 transition-colors duration-150">
                                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 font-semibold sm:mt-0 sm:col-span-2">{p.name}</dd>
                            </div>

                            <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-gray-50 transition-colors duration-150">
                                <dt className="text-sm font-medium text-gray-500">Demographics</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                                    {p.age} years old &nbsp;&bull;&nbsp; {p.gender}
                                </dd>
                            </div>

                            <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-gray-50 transition-colors duration-150">
                                <dt className="text-sm font-medium text-gray-500">Physical Metrics</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                                    <span className="inline-flex items-center text-gray-700 mr-4">
                                        {/* FIXED CONTRAST: Changed text-gray-400 to text-gray-500 */}
                                        <span className="text-gray-500 font-normal mr-1">Height:</span> {p.height} cm
                                    </span>
                                    <span className="inline-flex items-center text-gray-700">
                                        {/* FIXED CONTRAST: Changed text-gray-400 to text-gray-500 */}
                                        <span className="text-gray-500 font-normal mr-1">Weight:</span> {p.weight} kg
                                    </span>
                                </dd>
                            </div>

                            <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-gray-50 transition-colors duration-150">
                                <dt className="text-sm font-medium text-gray-500">Reason for Checkup</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <div className="bg-blue-50 border border-blue-100 text-blue-900 p-3.5 rounded-lg shadow-sm font-medium">
                                        {p.reason_for_checkup}
                                    </div>
                                </dd>
                            </div>

                        </dl>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end">
                        <Link
                            href={`/patients/${p.id}/edit`}
                            className="inline-flex justify-center items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-all"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit Patient Record
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}