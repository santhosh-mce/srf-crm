import { useState } from 'react';
import { Card, Button } from '../components/ui/Base';
import { User, Bell, Shield, Palette, Globe, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-8 max-w-4xl pb-12">
      <header>
        <h1 className="text-3xl font-serif italic text-white leading-none">System Configuration</h1>
        <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2 font-bold italic">Global preference management and identity authorization.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Rail */}
        <div className="space-y-1">
          {[
            { label: 'Identity', icon: User, active: true },
            { label: 'Notifications', icon: Bell },
            { label: 'Security', icon: Shield },
            { label: 'Visual Interface', icon: Palette },
            { label: 'Localization', icon: Globe },
          ].map((item) => (
            <button 
              key={item.label}
              className={`flex items-center gap-3 w-full px-4 py-3 text-[10px] uppercase tracking-widest font-bold transition-all border-l-2 ${
                item.active ? 'bg-white/5 text-white border-white' : 'text-white/20 border-transparent hover:bg-white/5 hover:text-white/50'
              }`}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-2 space-y-8">
          <Card title="Structural Identity" description="Operational metadata associated with your unique reference.">
             <div className="space-y-6">
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 bg-[#0d0d0d] border border-[#262626] flex items-center justify-center text-white/20 group cursor-pointer hover:border-white/20 transition-all">
                      <User size={32} className="group-hover:text-white/40" />
                   </div>
                   <div>
                      <Button variant="outline" size="sm">Replace Avatar</Button>
                      <p className="text-[9px] opacity-20 mt-2 uppercase tracking-tight">X.509 Certificate or Encrypted Hash preferred.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">First Reference</label>
                    <input autoFocus type="text" defaultValue="Santhosh" className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">Last Reference</label>
                    <input type="text" defaultValue="MCE" className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">Signal Channel</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="email" defaultValue="santhosh.mce1234@gmail.com" className="w-full pl-10 pr-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest opacity-30">Abstract</label>
                  <textarea rows={3} className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#262626] text-xs text-white focus:outline-none focus:border-[#444]" placeholder="Define your operational objective..."></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <Button size="sm">Commit Changes</Button>
                </div>
             </div>
          </Card>

          <Card title="Interface Protocol" description="Modify the visual bandwidth of the user environment.">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Sophisticated Dark</div>
                <div className="text-[10px] opacity-30 uppercase tracking-widest mt-1">High-fidelity contrast enabled by default.</div>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-5 border transition-all relative ${darkMode ? 'bg-white border-white' : 'bg-transparent border-[#262626]'}`}
              >
                <motion.div 
                  animate={{ x: darkMode ? 20 : 0 }}
                  className={`absolute top-0.5 left-0.5 w-3 h-3 ${darkMode ? 'bg-black' : 'bg-white/20'}`}
                />
              </button>
            </div>
          </Card>

          <div className="flex justify-between items-center p-6 bg-red-400/5 border border-red-400/20">
             <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-red-400">Termination Zone</div>
                <div className="text-[9px] opacity-40 uppercase tracking-tight mt-1">Irreversible deletion of all associated metadata.</div>
             </div>
             <Button variant="outline" size="sm" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">Purge Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
