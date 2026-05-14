<div class="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
    
    <div class="max-w-6xl mx-auto">
        
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
                <h1 class="text-3xl font-bold text-gray-900">Patients List</h1>
                <p class="text-sm text-gray-500 mt-1">Manage and view registered community members.</p>
            </div>
            
            <div class="mt-4 md:mt-0">
                <a href="/patients/create" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    Add New Patient
                </a>
            </div>
        </div>

        <div class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md shadow-sm">
            <div class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm text-green-700 font-medium">Patient registered successfully.</p>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-slate-50">
                        <tr>
                            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Age</th>
                            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Gender</th>
                            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Reason for Checkup</th>
                            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-100">
                        <tr class="hover:bg-slate-50 transition-colors duration-200">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">aflnla</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Male</td>
                            <td class="px-6 py-4 text-sm text-gray-600">nlsbnfla</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                <a href="/patients/1" class="text-blue-600 hover:text-blue-800 hover:underline">View Profile</a>
                            </td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
        
    </div>
</div>