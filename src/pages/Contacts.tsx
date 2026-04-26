import { useState } from 'react';
import { Button } from '../components/ui/Base';
import { Search, Mail, Phone, Building2, MoreVertical, Plus, UserPlus, Filter, Download } from 'lucide-react';
import { motion } from 'motion/react';

const contacts = [
  { id: 1, name: 'Santhosh Kumar', email: 'santhosh@example.com', phone: '+1 234 567 890', company: 'SRF Tech', role: 'CTO' },
  { id: 2, name: 'Alex Rivers', email: 'alex@lumina.io', phone: '+1 987 654 321', company: 'Lumina Soft', role: 'Sales Lead' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena@venture.com', phone: '+44 20 7123 4567', company: 'Venture Peak', role: 'Partner' },
  { id: 4, name: 'David Chen', email: 'd.chen@horizon.ai', phone: '+86 21 6123 4567', company: 'Horizon AI', role: 'Founder' },
  { id: 5, name: 'Sophia Miller', email: 'sophia@retailgroup.com', phone: '+1 555 0199', company: 'Miller Retail', role: 'Manager' },
  { id: 6, name: 'Marcus Thorne', email: 'm.thorne@global.com', phone: '+1 555 0123', company: 'Global Logistics', role: 'Director' },
];

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif italic text-white">Relationship Network</h1>
          <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Directory of all connected entities and key personnel.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={14} /> Export
          </Button>
          <Button size="sm" className="gap-2" onClick={() => setIsModalOpen(true)}>
            <UserPlus size={14} /> Add Contact
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-[#111] p-4 border border-[#262626] shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input 
            type="text" 
            placeholder="Filter network..." 
            className="w-full pl-10 pr-4 py-2 bg-[#0a0a0a] border border-[#262626] rounded-full text-xs focus:outline-none focus:border-[#444] text-[#e5e5e5]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <Filter size={16} /> Filters
          </Button>
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <span className="text-sm text-slate-500 font-medium">6 Contacts</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#111] border border-[#262626] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0d0d0d] border-b border-[#262626] text-[#e5e5e5] text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Intelligence</th>
                <th className="px-6 py-4">Entity</th>
                <th className="px-6 py-4 text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262626]">
              {contacts.map((contact) => (
                <motion.tr 
                  key={contact.id} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-[#333] text-white flex items-center justify-center font-bold text-xs">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{contact.name}</div>
                        <div className="text-[10px] uppercase tracking-tighter opacity-40 font-bold">{contact.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] opacity-60">
                        <Mail size={10} className="opacity-30" />
                        {contact.email}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] opacity-60">
                        <Phone size={10} className="opacity-30" />
                        {contact.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-serif italic text-white/80">
                      {contact.company}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-white/10 rounded text-white opacity-20 hover:opacity-100 transition-all">
                      <MoreVertical size={14} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Simple Modal UI Placeholder */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#111] w-full max-w-lg shadow-2xl overflow-hidden border border-[#262626]"
          >
            <div className="px-8 py-6 border-b border-[#262626]">
              <h3 className="text-2xl font-serif italic text-white">Create Identifier</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-40">Define a new node in the relationship network.</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">Identity</label>
                  <input type="text" className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" placeholder="First Reference" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">&nbsp;</label>
                  <input type="text" className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" placeholder="Last Reference" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">Channel</label>
                <input type="email" className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" placeholder="electronic@mail.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">Affiliation</label>
                <input type="text" className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" placeholder="Corporate Entity" />
              </div>
            </div>
            <div className="px-8 py-4 bg-[#0d0d0d] border-t border-[#262626] flex justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button size="sm" onClick={() => setIsModalOpen(false)}>Confirm Identifier</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
