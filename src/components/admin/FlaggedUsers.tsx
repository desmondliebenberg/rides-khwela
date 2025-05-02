
import React, { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlaggedUser } from "@/types/driver-compliance";
import { 
  Flag, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  MessageCircle, 
  Ban,
  ShieldCheck
} from "lucide-react";

// Mock data for flagged users
const mockFlaggedUsers: FlaggedUser[] = [
  {
    id: 1,
    name: "John Smith",
    userType: "driver",
    reason: "Multiple rider complaints about unsafe driving",
    date: "2023-06-12",
    status: "pending",
    severity: "medium"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    userType: "driver",
    reason: "Facial verification failed multiple times",
    date: "2023-06-10",
    status: "reviewed",
    severity: "medium"
  },
  {
    id: 3,
    name: "Robert Taylor",
    userType: "rider",
    reason: "Reported for non-payment on 3 different trips",
    date: "2023-06-08",
    status: "pending",
    severity: "high"
  },
  {
    id: 4,
    name: "Emma Wilson",
    userType: "rider",
    reason: "Abusive language towards driver",
    date: "2023-06-05",
    status: "resolved",
    severity: "medium"
  },
  {
    id: 5,
    name: "Michael Brown",
    userType: "driver",
    reason: "Expired documents, continued driving",
    date: "2023-06-03",
    status: "pending",
    severity: "high"
  },
  {
    id: 6,
    name: "Patricia Davis",
    userType: "rider",
    reason: "Payment issues, declined cards",
    date: "2023-06-01",
    status: "resolved",
    severity: "low"
  },
];

const FlaggedUsers = () => {
  const [filter, setFilter] = useState<"all" | "pending" | "reviewed" | "resolved">("all");
  
  // Filter users based on status
  const filteredUsers = mockFlaggedUsers.filter(user => {
    return filter === "all" || user.status === filter;
  });
  
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "low":
        return <Badge className="bg-yellow-500">Low</Badge>;
      case "medium":
        return <Badge className="bg-orange-500">Medium</Badge>;
      case "high":
        return <Badge className="bg-red-500">High</Badge>;
      default:
        return null;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="text-khwela-blue border-khwela-blue flex items-center gap-1">
            <AlertCircle size={12} />
            Pending
          </Badge>
        );
      case "reviewed":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500 flex items-center gap-1">
            <Info size={12} />
            Reviewed
          </Badge>
        );
      case "resolved":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500 flex items-center gap-1">
            <CheckCircle size={12} />
            Resolved
          </Badge>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
        <Flag className="text-amber-500 mr-3 mt-0.5" size={18} />
        <div>
          <h3 className="font-medium text-amber-800">Flagged Users Management</h3>
          <p className="text-amber-700 text-sm">
            This section shows users who have been flagged for potential issues. Review each case and take appropriate action.
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-khwela-slate">Filter:</span>
        <Button
          variant={filter === "all" ? "default" : "outline"}
          className={filter === "all" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All Issues
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          className={filter === "pending" ? "bg-khwela-blue hover:bg-khwela-blue/90" : ""}
          size="sm"
          onClick={() => setFilter("pending")}
        >
          <AlertCircle size={14} className="mr-1" />
          Pending
        </Button>
        <Button
          variant={filter === "reviewed" ? "default" : "outline"}
          className={filter === "reviewed" ? "bg-amber-600 hover:bg-amber-700" : ""}
          size="sm"
          onClick={() => setFilter("reviewed")}
        >
          <Info size={14} className="mr-1" />
          Reviewed
        </Button>
        <Button
          variant={filter === "resolved" ? "default" : "outline"}
          className={filter === "resolved" ? "bg-green-600 hover:bg-green-700" : ""}
          size="sm"
          onClick={() => setFilter("resolved")}
        >
          <CheckCircle size={14} className="mr-1" />
          Resolved
        </Button>
      </div>
      
      {/* Flagged Users Table */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {user.userType === "driver" ? (
                      <ShieldCheck size={12} className="mr-1" />
                    ) : (
                      <Info size={12} className="mr-1" />
                    )}
                    {user.userType}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="max-w-xs truncate" title={user.reason}>
                    {user.reason}
                  </div>
                </TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>{getSeverityBadge(user.severity)}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                      <MessageCircle size={14} />
                    </Button>
                    {user.status !== "resolved" && (
                      <>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-amber-500 hover:text-amber-600">
                          <Info size={14} />
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                          <Ban size={14} />
                        </Button>
                      </>
                    )}
                    {user.status !== "pending" && (
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-green-500 hover:text-green-600">
                        <CheckCircle size={14} />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {filteredUsers.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed">
          <p className="text-khwela-slate">No flagged users match your filters</p>
        </div>
      )}
    </div>
  );
};

export default FlaggedUsers;
