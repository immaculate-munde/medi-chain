import React from 'react';
import { BellIcon, SettingsIcon, LogOutIcon, UserIcon } from 'lucide-react';
interface DashboardHeaderProps {
  onLogout: () => void;
}
export function DashboardHeader({
  onLogout
}: DashboardHeaderProps) {
  return <header className="w-full bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <SettingsIcon className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
            <UserIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
          <button onClick={onLogout} className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
            <LogOutIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>;
}