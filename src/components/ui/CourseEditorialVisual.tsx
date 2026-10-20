import { Scale, HeartPulse, Orbit } from 'lucide-react';
import type { BarcarenaCourse } from '../../data/barcarenaCourses';

const motifs = {
  justice: { icon: Scale, background: 'linear-gradient(145deg, #123524, #06150e)' },
  care: { icon: HeartPulse, background: 'linear-gradient(145deg, #0e3d3c, #0e222e)' },
  connections: { icon: Orbit, background: 'linear-gradient(145deg, #453d30, #123524)' },
};

/** Composição original de interface: não representa pessoas ou instalações da unidade. */
export function CourseEditorialVisual({ course, compact = false }: { course: BarcarenaCourse; compact?: boolean }) {
  const { visual } = course.editorial;
  const { icon: Icon, background } = motifs[visual.motif];
  return (
    <div
      aria-hidden="true"
      className={`relative isolate flex overflow-hidden text-[#FAF8F5] ${compact ? 'min-h-56' : 'min-h-80 sm:min-h-[28rem]'}`}
      style={{ background }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full border border-[#C9A44C]/25" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-[#C9A44C]/20" />
      <div className="relative z-10 flex w-full flex-col justify-between gap-8 p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-[#E5C879]">
          <span>FAUNA · Barcarena</span>
          <Icon className="h-7 w-7 shrink-0" strokeWidth={1} />
        </div>
        <div>
          <p className={`font-serif leading-tight ${compact ? 'text-4xl' : 'text-5xl sm:text-6xl'}`}>{visual.words[0]}<span className="text-[#E5C879]">.</span></p>
          <p className="mt-3 text-xs tracking-wide text-[#D4DED8]">{visual.words.slice(1).join(' / ')}</p>
        </div>
        {!compact && <p className="max-w-64 text-sm leading-relaxed text-[#D4DED8]">{visual.caption}</p>}
      </div>
    </div>
  );
}