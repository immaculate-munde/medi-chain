import React from 'react';
import { MapPinIcon, AmbulanceIcon, HospitalIcon, PhoneIcon } from 'lucide-react';
export function EmergencyLocatorCard() {
  const nearbyServices = [{
    id: 1,
    name: 'City General Hospital',
    distance: '1.2 km',
    type: 'hospital'
  }, {
    id: 2,
    name: 'Emergency Ambulance',
    distance: '0.8 km',
    type: 'ambulance'
  }, {
    id: 3,
    name: 'St. Mary Medical Center',
    distance: '2.5 km',
    type: 'hospital'
  }];
  return <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
          <MapPinIcon className="w-5 h-5 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Emergency Locator
        </h2>
      </div>
      <div className="space-y-3">
        {nearbyServices.map(service => <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${service.type === 'hospital' ? 'bg-blue-100' : 'bg-red-100'}`}>
                {service.type === 'hospital' ? <HospitalIcon className="w-4 h-4 text-blue-600" /> : <AmbulanceIcon className="w-4 h-4 text-red-600" />}
              </div>
              <div>
                <p className="font-medium text-gray-900">{service.name}</p>
                <p className="text-sm text-gray-500">{service.distance} away</p>
              </div>
            </div>
            <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
              <PhoneIcon className="w-4 h-4" />
            </button>
          </div>)}
      </div>
      <button className="w-full mt-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2">
        <PhoneIcon className="w-5 h-5" />
        Emergency Call 911
      </button>
    </div>;
}