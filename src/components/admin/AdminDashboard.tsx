
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminMetrics } from "@/types/driver-compliance";
import { ArrowUp, ArrowDown, Users, Car, CreditCard, CalendarDays } from "lucide-react";
import UserManagement from "./UserManagement";
import FlaggedUsers from "./FlaggedUsers";
import AdminMetricsDisplay from "./AdminMetricsDisplay";

const mockMetrics: AdminMetrics = {
  totalDrivers: 572,
  activeDrivers: 328,
  totalRiders: 2845,
  activeRiders: 1267,
  tripsToday: 428,
  tripsThisWeek: 2934,
  tripsThisMonth: 11872,
  revenue: {
    today: 42800,
    week: 293400,
    month: 1187200,
  }
};

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Admin Dashboard</h1>
        <p className="text-khwela-slate mt-2">Manage users, view analytics, and handle system operations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-khwela-slate">Total Drivers</p>
                <p className="text-3xl font-bold text-khwela-blue">{mockMetrics.totalDrivers}</p>
                <div className="flex items-center mt-1 text-xs">
                  <span className="text-green-500 flex items-center">
                    <ArrowUp size={12} className="mr-1" />
                    8%
                  </span>
                  <span className="text-khwela-slate ml-2">vs last month</span>
                </div>
              </div>
              <div className="bg-khwela-light p-3 rounded-full">
                <Car size={24} className="text-khwela-blue" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-khwela-slate">Total Riders</p>
                <p className="text-3xl font-bold text-khwela-blue">{mockMetrics.totalRiders}</p>
                <div className="flex items-center mt-1 text-xs">
                  <span className="text-green-500 flex items-center">
                    <ArrowUp size={12} className="mr-1" />
                    12%
                  </span>
                  <span className="text-khwela-slate ml-2">vs last month</span>
                </div>
              </div>
              <div className="bg-khwela-light p-3 rounded-full">
                <Users size={24} className="text-khwela-blue" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-khwela-slate">Revenue (Monthly)</p>
                <p className="text-3xl font-bold text-khwela-blue">R{(mockMetrics.revenue.month / 1000).toFixed(1)}K</p>
                <div className="flex items-center mt-1 text-xs">
                  <span className="text-red-500 flex items-center">
                    <ArrowDown size={12} className="mr-1" />
                    3%
                  </span>
                  <span className="text-khwela-slate ml-2">vs last month</span>
                </div>
              </div>
              <div className="bg-khwela-light p-3 rounded-full">
                <CreditCard size={24} className="text-khwela-blue" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-khwela-slate">Trips (Today)</p>
                <p className="text-3xl font-bold text-khwela-blue">{mockMetrics.tripsToday}</p>
                <div className="flex items-center mt-1 text-xs">
                  <span className="text-green-500 flex items-center">
                    <ArrowUp size={12} className="mr-1" />
                    5%
                  </span>
                  <span className="text-khwela-slate ml-2">vs yesterday</span>
                </div>
              </div>
              <div className="bg-khwela-light p-3 rounded-full">
                <CalendarDays size={24} className="text-khwela-blue" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="metrics">
        <TabsList className="mb-8">
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="flagged">Flagged Users</TabsTrigger>
        </TabsList>
        
        <TabsContent value="metrics">
          <AdminMetricsDisplay metrics={mockMetrics} />
        </TabsContent>
        
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        
        <TabsContent value="flagged">
          <FlaggedUsers />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
