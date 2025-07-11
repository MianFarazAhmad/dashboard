'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'April', expirations: 3, violations: 6 },
  { month: 'May', expirations: 4, violations: 5.5 },
  { month: 'June', expirations: 5, violations: 4 },
  { month: 'July', expirations: 4.5, violations: 4 },
  { month: 'August', expirations: 4, violations: 5.5 },
  { month: 'September', expirations: 4.2, violations: 5.5 },
  { month: 'October', expirations: 4.3, violations: 5 },
  { month: 'November', expirations: 3.5, violations: 5.5 },
];

export default function ComplianceChart() {
  return (
    <div className="bg-white rounded-lg p-6 text-[14px] shadow w-full mx-auto">
      <h2 className="text-lg font-medium mb-4">Key Compliance Metrices</h2>

      <div className="w-full h-[263px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorViolations" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 14 }} />
            <YAxis domain={[1, 6]} tick={{ fontSize: 14 }} />
            <Tooltip
              contentStyle={{ fontSize: 14 }}
              itemStyle={{ fontSize: 14 }}
              labelStyle={{ fontSize: 14 }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              height={36}
              wrapperStyle={{ fontSize: 14 }}
              payload={[
                {
                  value: 'Document Expirations',
                  type: 'line',
                  color: '#6B7280',
                },
                { value: 'Violations', type: 'line', color: '#60A5FA' },
              ]}
            />

            <Area
              type="monotone"
              dataKey="expirations"
              stroke="#6B7280"
              strokeDasharray="5 5"
              fill="none"
              dot={false}
            />

            <Area
              type="monotone"
              dataKey="violations"
              stroke="#60A5FA"
              fillOpacity={1}
              fill="url(#colorViolations)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
