import { Card, Button } from '../components/ui/Base';
import { 
  Plus, 
  Calendar, 
  Tag, 
  TrendingUp, 
  ArrowRight,
  Filter,
  CheckCircle,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

const deals = [
  { id: 1, title: 'Global Connect Expansion', client: 'Acme Corp', value: '$45,000', stage: 'Proposal', closeDate: 'Oct 12, 2023', priority: 'High' },
  { id: 2, title: 'Stripe Integration Pack', client: 'Lumina Soft', value: '$12,500', stage: 'Discovery', closeDate: 'Oct 28, 2023', priority: 'Medium' },
  { id: 3, title: 'Horizon Towers CRM', client: 'Horizon AI', value: '$112,000', stage: 'Negotiation', closeDate: 'Nov 05, 2023', priority: 'High' },
  { id: 4, title: 'EduStream Platform', client: 'Venture Peak', value: '$285,000', stage: 'Negotiation', closeDate: 'Dec 15, 2023', priority: 'High' },
  { id: 5, title: 'UrbanMart POS Sync', client: 'Miller Retail', value: '$95,000', stage: 'Closing', closeDate: 'Sep 30, 2023', priority: 'High' },
];

export default function Deals() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif italic text-white text-white">Deal Flow</h1>
          <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Strategic overview of high-value opportunities and negotiations.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter size={14} /> Pipeline View
          </Button>
          <Button size="sm" className="gap-2">
            <Plus size={14} /> New Opportunity
          </Button>
        </div>
      </header>

      {/* Pipeline Summary Area */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { stage: 'Discovery', count: 8, icon: TrendingUp },
          { stage: 'Proposal', count: 5, icon: Clock },
          { stage: 'Negotiation', count: 3, icon: Tag },
          { stage: 'Closing', count: 2, icon: CheckCircle },
        ].map((item, i) => (
          <div key={i} className="bg-[#111] p-5 border border-[#262626] flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] text-white/50 border border-[#262626]">
              <item.icon size={16} />
            </div>
            <div>
              <div className="text-2xl font-serif italic text-white leading-none">{item.count}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-30 mt-1">{item.stage}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Deals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, idx) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="hover:shadow-2xl transition-all border-l border-l-white/20 cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif italic text-xl text-white group-hover:opacity-80 transition-opacity leading-tight">{deal.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2 font-bold">{deal.client}</p>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border ${
                  deal.priority === 'High' ? 'border-red-500/50 text-red-400' : 'border-white/20 text-white/60'
                }`}>
                  {deal.priority}
                </span>
              </div>
              
              <div className="mb-8 p-4 bg-[#0d0d0d] border border-white/5">
                <div className="text-3xl font-serif italic text-white">{deal.value}</div>
                <div className="text-[9px] opacity-20 mt-1 uppercase tracking-widest">Investment Value</div>
              </div>

              <div className="space-y-4 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest opacity-30 flex items-center gap-2">
                    <Clock size={12} /> Stage
                  </span>
                  <span className="text-xs font-bold text-white/80">{deal.stage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest opacity-30 flex items-center gap-2">
                    <Calendar size={12} /> Close Date
                  </span>
                  <span className="text-xs font-bold text-white/80">{deal.closeDate}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-[#333] border border-[#111]"></div>
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#111] text-[8px] flex items-center justify-center font-bold text-white/50">JD</div>
                </div>
                <button className="text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 opacity-40 hover:opacity-100 transition-all">
                  Inspect Deal <ArrowRight size={12} />
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
