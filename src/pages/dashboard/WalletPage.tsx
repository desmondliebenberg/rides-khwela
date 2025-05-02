
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import WalletTopUp from "@/components/rider-wallet/WalletTopUp";
import TransactionHistory from "@/components/rider-wallet/TransactionHistory";
import { Transaction } from "@/components/rider-wallet/TransactionHistory";

interface WalletPageProps {
  userType: "rider" | "driver";
}

const WalletPage = ({ userType }: WalletPageProps) => {
  const navigate = useNavigate();
  const [walletBalance, setWalletBalance] = useState(userType === "driver" ? "R650.00" : "R350.00");
  const [transactions, setTransactions] = useState<Transaction[]>([
    { 
      id: 1, 
      type: "top-up", 
      amount: "R100.00", 
      date: "2023-04-28", 
      status: "Completed",
      description: "Wallet Top Up"
    },
    { 
      id: 2, 
      type: "payment", 
      amount: "R65.00", 
      date: "2023-04-25", 
      status: "Completed",
      description: "Ride to Rosebank Mall"
    },
    { 
      id: 3, 
      type: "top-up", 
      amount: "R200.00", 
      date: "2023-04-20", 
      status: "Completed",
      description: "Wallet Top Up"
    },
  ]);
  
  // Check if user is logged in with the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("khwela-auth") === "true";
    const storedUserType = localStorage.getItem("khwela-user-type");
    
    if (!isLoggedIn || storedUserType !== userType) {
      navigate("/login");
    }
  }, [navigate, userType]);

  // Handle wallet top up
  const handleTopUp = (amount: number) => {
    // Format current balance without the "R" prefix
    const currentBalanceValue = parseFloat(walletBalance.replace("R", "").replace(",", ""));
    const newBalance = currentBalanceValue + amount;
    
    // Update wallet balance
    setWalletBalance(`R${newBalance.toFixed(2)}`);
    
    // Add transaction to history
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      type: "top-up",
      amount: `R${amount.toFixed(2)}`,
      date: new Date().toISOString().split("T")[0],
      status: "Completed",
      description: "Wallet Top Up"
    };
    
    setTransactions([newTransaction, ...transactions]);
  };

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
          {/* Wallet Top Up */}
          <div className="lg:col-span-1">
            <WalletTopUp 
              currentBalance={walletBalance} 
              onTopUp={handleTopUp} 
            />
          </div>
          
          {/* Transaction History */}
          <div className="lg:col-span-2">
            <TransactionHistory transactions={transactions} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletPage;
