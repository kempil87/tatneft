import { useEffect, useRef } from 'react';

interface CircleBarProps {
  value: number;
}

export const CircleBar = ({ value }: CircleBarProps) => {
  const ref = useRef<SVGCircleElement | null>(null);

  function setProgress(percent) {
    const circle = ref.current;

    if (!circle) return;
    const radius = circle.r.baseVal.value;
    const circumference = String(2 * Math.PI * radius);

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    circle.style.strokeDashoffset = String(
      circumference - (percent / 10) * circumference,
    );
  }

  const circleColor = (() => {
    if (value <= 50) {
      return '#ff3860';
    } else if (value <= 75) {
      return '#ffff00';
    }

    return '#20ee4f';
  })();

  useEffect(() => {
    setProgress(value / 10);
  }, [value]);

  return (
    <div className='relative'>
      <span className='text-lg font-medium pos-abs'>{value} %</span>

      <svg className='circle' height='125' width='125'>
        <circle
          ref={ref}
          cx='63'
          cy='63'
          r='40'
          style={{ stroke: circleColor }}
        />
      </svg>
    </div>
  );
};
