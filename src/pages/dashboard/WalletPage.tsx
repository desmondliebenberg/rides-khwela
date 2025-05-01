
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, DollarSign, ArrowDownToLine, ArrowUpFromLine, History } from "lucide-react";

interface WalletPageProps {
  userType: "rider" | "driver";
}

const WalletPage = ({ userType }: WalletPageProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== userType) {
      navigate("/login");
    }
  }, [navigate, userType]);

  // Simulated wallet data
  const walletBalance = userType === "driver" ? "R650.00" : "R350.00";
  const transactions = [
    { id: 1, type: "top-up", amount: "R100.00", date: "2023-04-28", status: "Completed" },
    { id: 2, type: "payment", amount: "R65.00", date: "2023-04-25", status: "Completed" },
    { id: 3, type: "top-up", amount: "R200.00", date: "2023-04-20", status: "Completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-khwela-blue">Wallet</h1>
            <p className="text-khwela-slate mt-1">Manage your funds and transactions</p>
          </div>
          <Button 
            variant="outline" 
            className="border-khwela-blue text-khwela-blue"
            onClick={() => navigate(`/${userType}-dashboard`)}
          >
            Back to Dashboard
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Balance Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <Wallet className="mr-2" size={20} />
                  Balance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6 text-center bg-gradient-to-r from-khwela-blue to-khwela-dark p-6 rounded-lg text-white">
                  <p className="text-sm font-medium">Current Balance</p>
                  <p className="text-3xl font-bold mt-2">{walletBalance}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button className="w-full flex items-center justify-center">
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Top Up
                  </Button>
                  {userType === "driver" && (
                    <Button 
                      variant="outline" 
                      className="w-full border-khwela-blue text-khwela-blue flex items-center justify-center"
                    >
                      <ArrowUpFromLine className="mr-2 h-4 w-4" />
                      Withdraw
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Transactions Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="bg-khwela-light/50 border-b pb-3">
                <CardTitle className="flex items-center text-khwela-blue">
                  <History className="mr-2" size={20} />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 ${tx.type === 'top-up' ? 'bg-green-100' : 'bg-blue-100'}`}>
                          {tx.type === 'top-up' ? (
                            <ArrowDownToLine className={`h-5 w-5 ${tx.type === 'top-up' ? 'text-green-600' : 'text-blue-600'}`} />
                          ) : (
                            <DollarSign className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-khwela-blue">
                            {tx.type === 'top-up' ? 'Wallet Top Up' : 'Payment for Ride'}
                          </p>
                          <p className="text-xs text-khwela-slate">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${tx.type === 'top-up' ? 'text-green-600' : 'text-blue-600'}`}>
                          {tx.type === 'top-up' ? `+${tx.amount}` : `-${tx.amount}`}
                        </p>
                        <p className="text-xs text-khwela-slate">{tx.status}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full border-khwela-blue text-khwela-blue">
                    View All Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletPage;
