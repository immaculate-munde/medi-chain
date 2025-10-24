import React from 'react';
import { FileTextIcon, ShieldCheckIcon, LockIcon } from 'lucide-react';
export function MedicalRecordsCard() {
  const records = [{
    id: 1,
    title: 'Blood Test Results',
    date: '2024-01-15',
    verified: true
  }, {
    id: 2,
    title: 'X-Ray Report',
    date: '2024-01-10',
    verified: true
  }, {
    id: 3,
    title: 'Prescription History',
    date: '2024-01-05',
    verified: true
  }];
  return <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <FileTextIcon className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Medical Records
          </h2>
        </div>
        <div className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          <ShieldCheckIcon className="w-3 h-3" />
          <span>Hedera Secured</span>
        </div>
      </div>
      <div className="space-y-3">
        {records.map(record => <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <LockIcon className="w-4 h-4 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">{record.title}</p>
                <p className="text-sm text-gray-500">{record.date}</p>
              </div>
            </div>
            {record.verified && <ShieldCheckIcon className="w-5 h-5 text-green-600" />}
          </div>)}
      </div>
      <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Upload New Record
      </button>
    </div>;
}