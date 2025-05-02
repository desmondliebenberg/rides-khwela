
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  AlertTriangle, 
  CheckCircle, 
  Calendar, 
  ShieldCheck 
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { DocumentStatus, DriverDocument } from "@/types/driver-compliance";

const DriverDocuments = () => {
  // State for the documents
  const [documents, setDocuments] = useState<DriverDocument[]>([
    { 
      id: 1, 
      name: "ID Document", 
      type: "identity", 
      status: "valid", 
      uploadDate: "2023-01-15", 
      expiryDate: null, 
      fileName: "id_document.pdf" 
    },
    { 
      id: 2, 
      name: "Driver's License", 
      type: "license", 
      status: "valid", 
      uploadDate: "2023-02-10", 
      expiryDate: "2025-02-10", 
      fileName: "drivers_license.pdf" 
    },
    { 
      id: 3, 
      name: "Vehicle License Disc", 
      type: "vehicle", 
      status: "warning", 
      uploadDate: "2022-06-15", 
      expiryDate: "2023-06-15", 
      fileName: "vehicle_license.pdf" 
    },
    { 
      id: 4, 
      name: "Police Clearance", 
      type: "clearance", 
      status: "expired", 
      uploadDate: "2022-01-20", 
      expiryDate: "2023-01-20", 
      fileName: "police_clearance.pdf" 
    }
  ]);

  // Function to handle document upload
  const handleDocumentUpload = (documentType: string, file: File | null, expiryDate?: string) => {
    if (!file) return;
    
    // Find the document to update
    const documentIndex = documents.findIndex(doc => doc.type === documentType);
    if (documentIndex === -1) return;
    
    // Create updated document with new file
    const updatedDocument = {
      ...documents[documentIndex],
      fileName: file.name,
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'valid' as DocumentStatus,
      expiryDate: expiryDate || documents[documentIndex].expiryDate
    };
    
    // Update documents array
    const updatedDocuments = [...documents];
    updatedDocuments[documentIndex] = updatedDocument;
    setDocuments(updatedDocuments);
    
    // Show success message
    toast.success(`Successfully uploaded ${updatedDocument.name}`);
  };

  // Helper function to determine status display
  const getStatusDisplay = (status: DocumentStatus) => {
    switch (status) {
      case 'valid':
        return { 
          badge: <Badge className="bg-green-500">Valid</Badge>, 
          icon: <CheckCircle size={18} className="text-green-500" /> 
        };
      case 'warning':
        return { 
          badge: <Badge className="bg-amber-500">Expiring Soon</Badge>, 
          icon: <AlertTriangle size={18} className="text-amber-500" /> 
        };
      case 'expired':
        return { 
          badge: <Badge className="bg-red-500">Expired</Badge>, 
          icon: <AlertTriangle size={18} className="text-red-500" /> 
        };
      default:
        return { 
          badge: <Badge>Unknown</Badge>, 
          icon: <AlertTriangle size={18} /> 
        };
    }
  };

  // Calculate days until expiry
  const getDaysUntilExpiry = (expiryDate: string | null) => {
    if (!expiryDate) return null;
    
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-khwela-light/50 border-b pb-3">
        <CardTitle className="flex items-center text-khwela-blue">
          <FileText className="mr-2" size={20} />
          Required Documents
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {documents.map((doc) => {
            const statusDisplay = getStatusDisplay(doc.status);
            const daysUntilExpiry = getDaysUntilExpiry(doc.expiryDate);
            
            return (
              <div key={doc.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {statusDisplay.icon}
                    </div>
                    <div>
                      <p className="font-medium text-khwela-blue">{doc.name}</p>
                      <div className="flex items-center mt-1 text-xs text-khwela-slate">
                        <p>Uploaded: {doc.uploadDate}</p>
                        {doc.expiryDate && (
                          <p className="ml-3">
                            Expires: {doc.expiryDate}
                            {daysUntilExpiry !== null && daysUntilExpiry <= 60 && (
                              <span className="ml-1 font-medium text-amber-500">
                                ({daysUntilExpiry} days left)
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                      <p className="text-xs mt-1 text-gray-500 truncate max-w-[200px]">
                        {doc.fileName}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    {statusDisplay.badge}
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 border-khwela-blue text-khwela-blue"
                        >
                          <Upload size={14} className="mr-1" />
                          Update
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Upload {doc.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor={`${doc.type}-file`}>Select File</Label>
                            <Input 
                              id={`${doc.type}-file`} 
                              type="file" 
                              accept=".pdf,.jpg,.jpeg,.png" 
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                const expiryDateInput = document.getElementById(`${doc.type}-expiry`) as HTMLInputElement;
                                handleDocumentUpload(doc.type, file, expiryDateInput?.value);
                              }}
                            />
                          </div>
                          
                          {doc.expiryDate !== null && (
                            <div className="space-y-2">
                              <Label htmlFor={`${doc.type}-expiry`}>Expiry Date</Label>
                              <Input 
                                id={`${doc.type}-expiry`} 
                                type="date" 
                                defaultValue={doc.expiryDate} 
                              />
                            </div>
                          )}
                          
                          <Button 
                            className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                            onClick={() => {
                              const fileInput = document.getElementById(`${doc.type}-file`) as HTMLInputElement;
                              const expiryDateInput = document.getElementById(`${doc.type}-expiry`) as HTMLInputElement;
                              const file = fileInput.files?.[0] || null;
                              handleDocumentUpload(doc.type, file, expiryDateInput?.value);
                            }}
                          >
                            Upload Document
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDocuments;
