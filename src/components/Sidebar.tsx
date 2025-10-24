import React from 'react';
import { HomeIcon, FileTextIcon, MapPinIcon, UserCheckIcon, HeartPulseIcon } from 'lucide-react';
interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}
export function Sidebar({
  activeSection,
  onSectionChange
}: SidebarProps) {
  const menuItems = [{
    id: 'overview',
    label: 'Overview',
    icon: HomeIcon
  }, {
    id: 'records',
    label: 'Medical Records',
    icon: FileTextIcon
  }, {
    id: 'emergency',
    label: 'Emergency',
    icon: MapPinIcon
  }, {
    id: 'access',
    label: 'Doctor Access',
    icon: UserCheckIcon
  }];
  return <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <HeartPulseIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">MediChain</span>
        </div>
      </div>
      <nav className="flex-1 p-4">
        {menuItems.map(item => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return <button key={item.id} onClick={() => onSectionChange(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>;
      })}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <span className="text-xs font-semibold text-green-700">
            Secured by Hedera
          </span>
        </div>
      </div>
    </aside>;
}