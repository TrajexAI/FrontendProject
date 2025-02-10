
import React from "react";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  targetValue?: string;
  currentValue: string;
  label?: string;
}

export function CircularProgress({
  value,
  size = 200,
  strokeWidth = 15,
  targetValue,
  currentValue,
  label,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#1E293B"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#1EAEDB"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            filter: "drop-shadow(0 0 6px rgba(30, 174, 219, 0.5))",
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold text-white mb-0.5">{currentValue}</span>
        {targetValue && (
          <span className="text-xs text-white/60">{targetValue}</span>
        )}
        {label && <span className="text-xs text-white/60">{label}</span>}
      </div>
    </div>
  );
}

