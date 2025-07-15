'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

import { ReactNode } from 'react';

// Define the type for each data point
interface ComplianceData {
  month: string;
  expirations: number;
  violations: number;
}

const data: ComplianceData[] = [
  { month: 'April', expirations: 3, violations: 6 },
  { month: 'May', expirations: 4, violations: 5.5 },
  { month: 'June', expirations: 5, violations: 4 },
  { month: 'July', expirations: 4.5, violations: 4 },
  { month: 'August', expirations: 4, violations: 5.5 },
  { month: 'September', expirations: 4.2, violations: 5.5 },
  { month: 'October', expirations: 4.3, violations: 5 },
  { month: 'November', expirations: 3.5, violations: 5.5 },
];

// Safe formatter for labels
const formatLabel = (value: ReactNode): ReactNode =>
  typeof value === 'number' ? value.toFixed(1) : value;

export default function ComplianceChart() {
  return (
    <div className="bg-white rounded-lg text-14 shadow w-full mx-auto">
      <div className="px-6 pt-6 mb-2 flex justify-between">
        <h2 className="font-semibold text-18 mb-1">Key Compliance Metrics</h2>
        <div className="flex xs-d-none items-center gap-6 text-sm text-gray-600">
          <div className="flex justify-end px-3 items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#555555CC]" />
            <span>Document Expirations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Violations</span>
          </div>
        </div>
      </div>

      <div className="flex items-center md-hidden justify-end px-4 gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#555555CC]" />
          <span className="font-4 text-12">Document Expirations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="font-4 text-12">Violations</span>
        </div>
      </div>

      <div className="w-full mt-0 mr-0 mb-0 mdv:h-[15rem] -ml-5 pr-0 md:h-[19rem] lg:h-[16.8rem] xl:h-[18.125rem]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorViolations" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 14 }}
              tickLine={false}
              axisLine={false}
              padding={{ left: 5, right: 0 }}
            />

            <YAxis
              domain={[1, 6]}
              ticks={[1, 2, 3, 4, 5, 6]}
              tick={{ fontSize: 14 }}
              tickFormatter={(tick: number) => tick.toString().padStart(2, '0')}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{ fontSize: 14 }}
              itemStyle={{ fontSize: 14 }}
              labelStyle={{ fontSize: 14 }}
            />

            <Area
              type="monotone"
              dataKey="expirations"
              stroke="#6B7280"
              strokeDasharray="5 5"
              fill="none"
              dot={false}
            >
              <LabelList
                dataKey="expirations"
                position="top"
                formatter={formatLabel}
                style={{ fill: '#6B7280', fontSize: 12 }}
              />
            </Area>

            <Area
              type="monotone"
              dataKey="violations"
              stroke="#60A5FA"
              fillOpacity={1}
              fill="url(#colorViolations)"
              dot={false}
            >
              <LabelList
                dataKey="violations"
                position="top"
                formatter={formatLabel}
                style={{ fill: '#60A5FA', fontSize: 12 }}
              />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
