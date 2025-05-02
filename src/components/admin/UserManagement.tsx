
import React, { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Shield, 
  User, 
  Download,
  FileText
} from "lucide-react";

// Mock data for the user management table
const mockUsers = [
  { 
    id: 1, 
    name: "John Smith", 
    email: "john.smith@example.com", 
    type: "driver", 
    documentStatus: "valid",
    badgeLevel: "Gold",
    accountStatus: "active",
    joinDate: "2023-01-15"
  },
  { 
    id: 2, 
    name: "Sarah Johnson", 
    email: "sarah.j@example.com", 
    type: "driver", 
    documentStatus: "warning",
    badgeLevel: "Silver", 
    accountStatus: "active",
    joinDate: "2023-02-28"
  },
  { 
    id: 3, 
    name: "Michael Brown", 
    email: "mbrown@example.com", 
    type: "driver", 
    documentStatus: "expired",
    badgeLevel: "None", 
    accountStatus: "suspended",
    joinDate: "2022-11-10"
  },
  { 
    id: 4, 
    name: "Emma Wilson", 
    email: "emma.w@example.com", 
    type: "rider", 
    documentStatus: "valid",
    badgeLevel: "", 
    accountStatus: "active",
    joinDate: "2023-03-15"
  },
  { 
    id: 5, 
    name: "James Taylor", 
    email: "james.t@example.com", 
    type: "rider", 
    documentStatus: "valid",
    badgeLevel: "", 
    accountStatus: "active",
    joinDate: "2023-01-22"
  },
  { 
    id: 6, 
    name: "Patricia Davis", 
    email: "pat.davis@example.com", 
    type: "driver", 
    documentStatus: "valid",
    badgeLevel: "Gold", 
    accountStatus: "active",
    joinDate: "2022-12-05"
  },
  { 
    id: 7, 
    name: "Robert Miller", 
    email: "robert.m@example.com", 
    type: "rider", 
    documentStatus: "valid",
    badgeLevel: "", 
    accountStatus: "inactive",
    joinDate: "2022-10-18"
  },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "driver" | "rider">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive" | "suspended">("all");
  
  // Filter users based on search and filters
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = filterType === "all" || user.type === filterType;
    const matchesStatus = filterStatus === "all" || user.accountStatus === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case "valid":
        return <CheckCircle size={16} className="text-green-500" />;
      case "warning":
        return <AlertTriangle size={16} className="text-amber-500" />;
      case "expired":
        return <XCircle size={16} className="text-red-500" />;
      default:
        return null;
    }
  };
  
  const getAccountStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>;
      case "inactive":
        return <Badge variant="outline" className="text-gray-500">Inactive</Badge>;
      case "suspended":
        return <Badge className="bg-red-500 hover:bg-red-600">Suspended</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search by name or email..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter size={16} className="text-khwela-blue" />
          <Button
            variant={filterType === "all" ? "default" : "outline"}
            className={filterType === "all" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
            size="sm"
            onClick={() => setFilterType("all")}
          >
            All
          </Button>
          <Button
            variant={filterType === "driver" ? "default" : "outline"}
            className={filterType === "driver" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
            size="sm"
            onClick={() => setFilterType("driver")}
          >
            <Shield size={14} className="mr-1" />
            Drivers
          </Button>
          <Button
            variant={filterType === "rider" ? "default" : "outline"}
            className={filterType === "rider" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
            size="sm"
            onClick={() => setFilterType("rider")}
          >
            <User size={14} className="mr-1" />
            Riders
          </Button>
        </div>
      </div>
      
      {/* Status Filter */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-khwela-slate">Status:</span>
        <Button
          variant={filterStatus === "all" ? "default" : "outline"}
          className={filterStatus === "all" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
          size="sm"
          onClick={() => setFilterStatus("all")}
        >
          All
        </Button>
        <Button
          variant={filterStatus === "active" ? "default" : "outline"}
          className={filterStatus === "active" ? "bg-green-600 hover:bg-green-700" : ""}
          size="sm"
          onClick={() => setFilterStatus("active")}
        >
          Active
        </Button>
        <Button
          variant={filterStatus === "inactive" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilterStatus("inactive")}
        >
          Inactive
        </Button>
        <Button
          variant={filterStatus === "suspended" ? "default" : "outline"}
          className={filterStatus === "suspended" ? "bg-red-600 hover:bg-red-700" : ""}
          size="sm"
          onClick={() => setFilterStatus("suspended")}
        >
          Suspended
        </Button>
      </div>
      
      {/* Users Table */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Badge</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {user.type === "driver" ? (
                      <Shield size={12} className="mr-1" />
                    ) : (
                      <User size={12} className="mr-1" />
                    )}
                    {user.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  {user.type === "driver" && (
                    <div className="flex items-center">
                      {getDocumentStatusIcon(user.documentStatus)}
                      <span className="ml-1 capitalize">
                        {user.documentStatus}
                      </span>
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  {user.badgeLevel ? (
                    <Badge className={
                      user.badgeLevel === "Gold" ? "bg-khwela-gold text-khwela-dark" : 
                      user.badgeLevel === "Silver" ? "bg-gray-300 text-gray-700" :
                      "bg-gray-200 text-gray-500"
                    }>
                      {user.badgeLevel}
                    </Badge>
                  ) : ""}
                </TableCell>
                <TableCell>
                  {getAccountStatusBadge(user.accountStatus)}
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <FileText size={14} />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <Download size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {filteredUsers.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed">
          <p className="text-khwela-slate">No users match your filters</p>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-khwela-slate">
          Showing {filteredUsers.length} of {mockUsers.length} users
        </p>
        <Button variant="outline">Export Data</Button>
      </div>
    </div>
  );
};

export default UserManagement;
