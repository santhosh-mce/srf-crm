import { Card, Button } from '../components/ui/Base';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download, 
  Calendar,
  ChevronDown
} from 'lucide-react';

export default function Reports() {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif italic text-white leading-none">Intelligence Audit</h1>
          <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2 font-bold">Deep analytical review of transactional velocity and structural growth.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={14} /> Extraction
          </Button>
          <Button size="sm" className="gap-2">
            <Calendar size={14} /> Seasonal Cycle <ChevronDown size={12} />
          </Button>
        </div>
      </header>

      {/* Overview Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Structural Distribution" description="Resource allocation by stage" icon={PieChart}>
          <div className="h-64 flex items-center justify-center bg-[#0d0d0d] border border-[#262626]">
            <div className="relative h-40 w-40 rounded-full border-[12px] border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-t-white/40 border-r-white/20 border-b-white/10 border-l-transparent"></div>
              <div className="text-center">
                <div className="text-2xl font-serif italic text-white">452</div>
                <div className="text-[8px] opacity-30 font-bold uppercase tracking-widest mt-1">Total Logic</div>
              </div>
            </div>
            {/* Legend */}
            <div className="ml-8 space-y-3">
              {[
                { label: 'Discovery', color: 'bg-white/40', pct: '45%' },
                { label: 'Negotiation', color: 'bg-white/20', pct: '30%' },
                { label: 'Closing', color: 'bg-white/10', pct: '15%' },
                { label: 'Others', color: 'bg-white/5', pct: '10%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{item.label}</span>
                  <span className="text-[10px] text-white/60 font-bold ml-auto">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card title="Velocity Dynamics" description="Actual vs Target momentum" icon={TrendingUp}>
          <div className="h-64 bg-[#0d0d0d] border border-[#262626] p-8 flex items-end justify-between gap-3">
            {[45, 60, 40, 85, 70, 95, 80, 75, 90, 65, 85, 100].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div className="w-full bg-white opacity-5 group-hover:opacity-20 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white opacity-0 group-hover:opacity-40 transition-opacity">
                  {h}%
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Structural Efficiency" icon={BarChart3}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-[#0d0d0d] border border-[#262626]">
              <div className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-3">MQL Convergence</div>
              <div className="text-3xl font-serif italic text-white leading-none">24.8%</div>
              <div className="mt-4 text-green-500 text-[10px] font-bold flex items-center gap-2 uppercase tracking-tight">
                +2.4% <TrendingUp size={10} />
              </div>
            </div>
            
            <div className="p-6 bg-[#0d0d0d] border border-[#262626]">
              <div className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-3">SQL Velocity</div>
              <div className="text-3xl font-serif italic text-white leading-none">18.2%</div>
              <div className="mt-4 text-green-500 text-[10px] font-bold flex items-center gap-2 uppercase tracking-tight">
                +1.1% <TrendingUp size={10} />
              </div>
            </div>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626]">
              <div className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-3">Unit Revenue</div>
              <div className="text-3xl font-serif italic text-white leading-none">$4.2k</div>
              <div className="mt-4 text-red-400 text-[10px] font-bold flex items-center gap-2 uppercase tracking-tight">
                -0.4% <TrendingUp size={10} className="rotate-180" />
              </div>
            </div>

            <div className="p-6 bg-[#0d0d0d] border border-[#262626]">
              <div className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-3">Retention Mass</div>
              <div className="text-3xl font-serif italic text-white leading-none">92.4%</div>
              <div className="mt-4 text-green-500 text-[10px] font-bold flex items-center gap-2 uppercase tracking-tight">
                +5.7% <TrendingUp size={10} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
