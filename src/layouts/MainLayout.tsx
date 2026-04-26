import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Contact, 
  Handshake, 
  CheckSquare, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  User, 
  ChevronLeft, 
  Menu,
  Plus
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Button } from '../components/ui/Base';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Leads', path: '/leads' },
  { icon: Contact, label: 'Contacts', path: '/contacts' },
  { icon: Handshake, label: 'Deals', path: '/deals' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function MainLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarCollapsed ? 80 : 260 }}
        className="bg-[#0a0a0a] border-r border-[#262626] flex flex-col relative z-20"
      >
        <div className="p-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm shrink-0">
            <span className="text-[#0a0a0a] font-bold text-xs italic">SRF</span>
          </div>
          {!isSidebarCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="font-serif italic text-xl tracking-tight text-white whitespace-nowrap"
            >
              SRF CRM
            </motion.div>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded transition-all group ${
                  isActive 
                    ? 'bg-[#1a1a1a] text-white border border-[#333]' 
                    : 'text-[#e5e5e5] opacity-60 hover:opacity-100 hover:bg-[#111]'
                }`}
              >
                <item.icon size={18} className={isActive ? 'text-white' : 'text-[#e5e5e5]'} />
                {!isSidebarCollapsed && (
                  <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-xs uppercase tracking-widest font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-[#262626]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#333] border border-[#444] shrink-0"></div>
            {!isSidebarCollapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-[10px] uppercase tracking-tighter font-semibold">Santhosh MCE</p>
                <p className="text-xs opacity-50">Admin</p>
              </motion.div>
            )}
          </div>
          {!isSidebarCollapsed && (
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="mt-6 flex items-center gap-3 w-full text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-all font-medium"
            >
              <div className={`transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`}>
                <ChevronLeft size={14} />
              </div>
              <span>Collapse</span>
            </button>
          )}
          {isSidebarCollapsed && (
             <button 
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="mt-4 flex justify-center w-full text-slate-500 hover:text-white"
             >
                <Menu size={20} />
             </button>
          )}
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <header className="h-16 border-b border-[#262626] flex items-center justify-between px-8 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full group">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-30 group-focus-within:opacity-100 transition-opacity" />
              <input 
                type="text" 
                placeholder="Search relationships..."
                className="w-full pl-10 pr-4 py-2 bg-[#111] border border-[#262626] rounded-full text-xs focus:outline-none focus:border-[#444] text-[#e5e5e5] placeholder:text-white/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-white opacity-50 hover:opacity-100 transition-opacity p-1">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full border-2 border-[#0a0a0a]"></span>
            </button>
            <Button size="sm">New Lead</Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-8 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
