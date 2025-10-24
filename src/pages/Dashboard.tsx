import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { DashboardHeader } from '../components/DashboardHeader';
import { MedicalRecordsCard } from '../components/MedicalRecordsCard';
import { EmergencyLocatorCard } from '../components/EmergencyLocatorCard';
import { DoctorAccessCard } from '../components/DoctorAccessCard';
interface DashboardProps {
  onLogout: () => void;
}
export function Dashboard({
  onLogout
}: DashboardProps) {
  const [activeSection, setActiveSection] = useState('overview');
  return <div className="w-full min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <DashboardHeader onLogout={onLogout} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome back, Patient
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MedicalRecordsCard />
              <EmergencyLocatorCard />
              <DoctorAccessCard />
            </div>
          </div>
        </main>
      </div>
    </div>;
}