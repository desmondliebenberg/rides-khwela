
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminMetrics } from "@/types/driver-compliance";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface AdminMetricsDisplayProps {
  metrics: AdminMetrics;
}

const AdminMetricsDisplay = ({ metrics }: AdminMetricsDisplayProps) => {
  // Trip data for bar chart
  const tripData = [
    { name: 'Mon', trips: 395 },
    { name: 'Tue', trips: 410 },
    { name: 'Wed', trips: 421 },
    { name: 'Thu', trips: 445 },
    { name: 'Fri', trips: 578 },
    { name: 'Sat', trips: 521 },
    { name: 'Sun', trips: 411 }
  ];
  
  // User breakdown for pie chart
  const userData = [
    { name: 'Active Drivers', value: metrics.activeDrivers, color: '#3b82f6' },
    { name: 'Inactive Drivers', value: metrics.totalDrivers - metrics.activeDrivers, color: '#93c5fd' },
    { name: 'Active Riders', value: metrics.activeRiders, color: '#10b981' },
    { name: 'Inactive Riders', value: metrics.totalRiders - metrics.activeRiders, color: '#6ee7b7' }
  ];
  
  // Revenue data
  const revenueData = [
    { month: 'Jan', revenue: 980000 },
    { month: 'Feb', revenue: 1050000 },
    { month: 'Mar', revenue: 980000 },
    { month: 'Apr', revenue: 1120000 },
    { month: 'May', revenue: 1150000 },
    { month: 'Jun', revenue: 1250000 },
    { month: 'Jul', revenue: 1187200 }
  ];
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-khwela-blue">Weekly Trip Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={tripData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="trips" fill="#3b82f6" name="Number of Trips" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-khwela-blue">User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex flex-col items-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={userData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {userData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}`, 'Users']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-4">
                {userData.map((entry, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                    <span className="text-sm text-khwela-slate">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-khwela-blue">Monthly Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `R${value / 1000}k`} />
                <Tooltip formatter={(value) => [`R${(value as number).toLocaleString()}`, 'Revenue']} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMetricsDisplay;
