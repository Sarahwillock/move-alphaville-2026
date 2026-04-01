import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const months = [
  { name: 'Abril', path: '/april' },
  { name: 'Maio', path: '/may' },
  { name: 'Junho', path: '/june' },
  { name: 'Eventos Move', path: '/schedules' },
];

export default function MonthSwitcher() {
  const location = useLocation();

  return (
    <div className="w-full overflow-x-auto pb-3 no-scrollbar">
      <div className="flex gap-3 min-w-max pr-4">
        {months.map((month) => {
          const isActive = location.pathname === month.path;

          return (
            <Link
              key={month.name}
              to={month.path}
              className={cn(
                'shrink-0 border-2 font-black uppercase italic tracking-tighter transition-all',
                'px-4 py-3 text-lg',
                'md:px-6 md:py-2 md:text-2xl',
                isActive
                  ? 'bg-move-blue text-white border-move-blue'
                  : 'bg-black/40 text-white/60 border-white/20 hover:border-white/60'
              )}
            >
              {month.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
