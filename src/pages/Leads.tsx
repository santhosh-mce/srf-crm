import { useState } from 'react';
import { Card, Button } from '../components/ui/Base';
import { MoreHorizontal, Plus, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface Lead {
  id: string;
  name: string;
  company: string;
  status: 'New' | 'Contacted' | 'Interested' | 'Closed';
  value: string;
  avatar?: string;
}

const initialLeads: Lead[] = [
  { id: '1', name: 'Jordan Smith', company: 'Lumina Innovations', status: 'New', value: '$12,000' },
  { id: '2', name: 'Sarah Jenkins', company: 'Flow State Design', status: 'New', value: '$8,500' },
  { id: '3', name: 'Marcus Thorne', company: 'Global Logistics', status: 'Contacted', value: '$45,000' },
  { id: '4', name: 'Elena Rodriguez', company: 'Venture Peak', status: 'Contacted', value: '$22,000' },
  { id: '5', name: 'David Chen', company: 'Horizon AI', status: 'Interested', value: '$150,000' },
  { id: '6', name: 'Sophia Miller', company: 'Miller Retail', status: 'Closed', value: '$24,500' },
];

const columns: Lead['status'][] = ['New', 'Contacted', 'Interested', 'Closed'];

export default function Leads() {
  const [leads] = useState<Lead[]>(initialLeads);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif italic text-3xl">Leads Pipeline</h2>
          <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Acquire and nurture high-value relationships.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter size={14} /> Filter
          </Button>
          <Button size="sm" className="gap-2">
            <Plus size={14} /> New Lead
          </Button>
        </div>
      </header>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-6 h-full min-h-[500px]">
          {columns.map((col, colIdx) => (
            <div key={col} className="w-80 flex flex-col shrink-0">
              <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] uppercase font-bold tracking-widest">{col}</h3>
                  <span className="text-[10px] opacity-30">({leads.filter(l => l.status === col).length})</span>
                </div>
                <button className="text-white opacity-20 hover:opacity-100 transition-opacity">
                  <MoreHorizontal size={14} />
                </button>
              </div>

              <div className="flex-1 bg-[#0d0d0d] border border-[#262626] p-3 space-y-3 rounded-sm">
                {leads
                  .filter(l => l.status === col)
                  .map((lead, leadIdx) => (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (colIdx * 0.1) + (leadIdx * 0.05) }}
                    >
                      <div className="bg-[#161616] p-4 border border-[#222] border-l-2 border-l-white group cursor-grab active:cursor-grabbing hover:border-[#444] transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-[9px] uppercase tracking-widest opacity-40">{lead.company}</p>
                          <span className="text-white opacity-10 group-hover:opacity-40 transition-opacity">
                            <MoreHorizontal size={12} />
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold mb-3">{lead.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] bg-white/5 px-2 py-1 font-bold">{lead.value}</span>
                          <div className="w-5 h-5 rounded-full bg-[#333] border border-[#444] flex items-center justify-center text-[9px] font-bold text-white opacity-50">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                <button className="w-full py-4 border border-dashed border-[#262626] text-[9px] uppercase tracking-widest opacity-30 hover:opacity-100 hover:border-[#444] transition-all flex items-center justify-center gap-2 font-bold">
                  <Plus size={12} /> Drop here
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
