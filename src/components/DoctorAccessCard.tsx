import React from 'react';
import { UserCheckIcon, CheckIcon, XIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';
export function DoctorAccessCard() {
  const accessRequests = [{
    id: 1,
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    status: 'pending'
  }, {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'General Physician',
    status: 'approved'
  }, {
    id: 3,
    doctor: 'Dr. Emily Rodriguez',
    specialty: 'Dermatologist',
    status: 'pending'
  }];
  return <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <UserCheckIcon className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Doctor Access Requests
          </h2>
        </div>
        <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          <ShieldCheckIcon className="w-3 h-3" />
          <span>Smart Contract</span>
        </div>
      </div>
      <div className="space-y-3">
        {accessRequests.map(request => <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {request.doctor.split(' ')[1][0]}
              </div>
              <div>
                <p className="font-medium text-gray-900">{request.doctor}</p>
                <p className="text-sm text-gray-500">{request.specialty}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {request.status === 'pending' ? <>
                  <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                    <CheckIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                    <XIcon className="w-4 h-4" />
                  </button>
                </> : <div className="flex items-center gap-1 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  <CheckIcon className="w-3 h-3" />
                  <span>Approved</span>
                </div>}
            </div>
          </div>)}
      </div>
      <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
        <ClockIcon className="w-5 h-5 text-blue-600 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-blue-900">
            Smart Contract Protection
          </p>
          <p className="text-xs text-blue-700 mt-1">
            All access approvals are recorded on Hedera blockchain with
            automatic expiration and revocation capabilities
          </p>
        </div>
      </div>
    </div>;
}