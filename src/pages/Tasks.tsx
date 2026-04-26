import { useState, FormEvent } from 'react';
import { Card, Button } from '../components/ui/Base';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Filter, 
  Plus, 
  Search, 
  Trash2, 
  Calendar as CalendarIcon,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  due: string;
}

const initialTasks: Task[] = [
  { id: 1, title: 'Follow up with David Chen', completed: false, priority: 'High', due: 'Today' },
  { id: 2, title: 'Send contract to Acme Corp', completed: false, priority: 'Medium', due: 'Tomorrow' },
  { id: 3, title: 'Update sales report Q3', completed: true, priority: 'Medium', due: 'Yesterday' },
  { id: 4, title: 'Team sync for Q4 planning', completed: false, priority: 'High', due: 'Friday' },
  { id: 5, title: 'Prepare product demo for Lumina', completed: false, priority: 'Low', due: 'Oct 30' },
];

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
      priority: 'Medium',
      due: 'Today'
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif italic text-white leading-none">Daily Directives</h1>
          <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2 font-bold italic tracking-tighter">Operational protocols and strategic mandates.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
             <CalendarIcon size={14} /> Schedule
          </Button>
        </div>
      </header>

      {/* Task Input */}
      <div className="bg-[#111] p-2 border border-[#262626]">
        <form onSubmit={addTask} className="flex items-center gap-4 px-4 py-2">
          <div className="h-8 w-8 flex items-center justify-center text-white/30 bg-[#0d0d0d] border border-[#262626]">
            <Plus size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Transmit new objective..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-xs font-serif italic text-white placeholder:opacity-30"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <Button type="submit" size="sm" disabled={!newTaskTitle.trim()} className="h-8 text-[9px]">Launch Task</Button>
        </form>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1 bg-[#111] border border-[#262626] p-1">
          {['All', 'Today', 'Upcoming', 'Completed'].map((filter) => (
            <button 
              key={filter}
              className={`px-4 py-1.5 text-[9px] uppercase tracking-widest font-bold transition-all ${
                filter === 'All' 
                  ? 'bg-white text-black' 
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <button className="ml-auto flex items-center gap-2 text-[9px] font-bold text-white/30 hover:text-white transition-all uppercase tracking-widest italic">
          <Filter size={12} /> Optimization <ChevronDown size={12} />
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`group flex items-center gap-4 p-5 bg-[#111] border transition-all ${
                task.completed ? 'border-[#1a1a1a] opacity-40' : 'border-[#262626] hover:border-[#444]'
              }`}>
                <button 
                  onClick={() => toggleTask(task.id)}
                  className={`shrink-0 transition-colors w-5 h-5 flex items-center justify-center border ${
                    task.completed ? 'bg-white border-white text-black' : 'border-[#262626] text-white/20 hover:text-white/50'
                  }`}
                >
                  {task.completed ? <CheckCircle2 size={12} strokeWidth={3} /> : <div className="w-1 h-1 bg-white/20"></div>}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold truncate transition-all leading-none ${
                    task.completed ? 'text-white/20 line-through' : 'text-white'
                  }`}>
                    {task.title}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-[9px] text-white/30 font-bold uppercase tracking-widest italic">
                      <Clock size={10} /> {task.due}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${
                      task.priority === 'High' ? 'text-red-400' : 
                      task.priority === 'Medium' ? 'text-orange-400' : 'text-blue-400'
                    }`}>
                      {task.priority} Urgency
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => removeTask(task.id)}
                    className="p-2 text-white/10 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {tasks.length === 0 && (
        <div className="py-20 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">All tasks completed!</h2>
          <p className="text-slate-500 mt-2">Nice job. You're all caught up for today.</p>
        </div>
      )}
    </div>
  );
}
