import { 
  TrendingUp, 
  Users, 
  Handshake, 
  DollarSign, 
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { Card } from '../components/ui/Base';
import { motion } from 'motion/react';

const stats = [
  { label: 'New Leads', value: '1,284', change: '+12.5%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Deals', value: '452', change: '+5.2%', icon: Handshake, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Revenue', value: '$2.4M', change: '+18.1%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Conversion', value: '14.2%', change: '-2.4%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
];

const recentActivity = [
  { user: 'Santhosh MCE', action: 'closed a deal', target: 'Acme Corp', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-500' },
  { user: 'Alex Rivers', action: 'added a new lead', target: 'Lumina Soft', time: '4 hours ago', icon: PlusIcon, color: 'text-blue-500' },
  { user: 'Elena Rodriguez', action: 'updated goal state', target: 'Enterprise Q4', time: '5 hours ago', icon: Clock, color: 'text-slate-400' },
];

function PlusIcon(props: any) {
  return <Users {...props} />;
}

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h1 className="text-3xl font-serif italic text-white">Market Pulse</h1>
        <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Real-time pipeline monitoring and performance analytics.</p>
      </header>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="bg-[#111] p-6 border border-[#262626] flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2">{stat.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif italic">{stat.value}</span>
                <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-[9px] opacity-20 mt-2 uppercase tracking-tight">vs Previous Month</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif italic text-2xl">Sales Forecast</h2>
            <span className="text-[10px] uppercase tracking-widest opacity-40 cursor-pointer">Analyze trends →</span>
          </div>
          <div className="bg-[#111] border border-[#262626] p-8 h-[350px] flex flex-col">
            <div className="flex-1 flex items-end gap-3 pb-8">
              {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-white opacity-10 hover:opacity-30 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between border-t border-[#262626] pt-4 text-[9px] uppercase tracking-widest opacity-30">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
        </div>

        {/* Pulse (Recent Activity) */}
        <div className="space-y-4">
          <h2 className="font-serif italic text-2xl">Pulse</h2>
          <div className="bg-[#111] border border-[#262626] p-6 h-full flex flex-col gap-6">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className={`w-1 h-8 ${activity.color.includes('emerald') ? 'bg-green-500 opacity-50' : activity.color.includes('blue') ? 'bg-blue-500 opacity-50' : 'bg-white opacity-20'} shrink-0`}></div>
                <div>
                  <p className="text-[11px] leading-tight">
                    <span className="font-bold">{activity.user}</span> {activity.action} <span className="font-bold">{activity.target}</span>
                  </p>
                  <p className="text-[10px] opacity-30 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
            <button className="mt-auto py-3 text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-all border-t border-[#262626]">
              View Transmission Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
