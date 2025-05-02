
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, CreditCard, DollarSign } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface WalletTopUpProps {
  currentBalance: string;
  onTopUp: (amount: number) => void;
}

const WalletTopUp = ({ currentBalance, onTopUp }: WalletTopUpProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = [100, 250, 500];
  
  const handleTopUp = () => {
    const amount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);
    
    if (amount <= 0) {
      toast.error("Please select a valid amount to top up");
      return;
    }
    
    onTopUp(amount);
    setSelectedAmount(null);
    setCustomAmount("");
    toast.success(`Successfully topped up R${amount.toFixed(2)}`);
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-khwela-light/50 border-b pb-3">
        <CardTitle className="flex items-center text-khwela-blue">
          <Wallet className="mr-2" size={20} />
          Wallet Balance
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center bg-gradient-to-r from-khwela-blue to-khwela-dark p-6 rounded-lg text-white">
          <p className="text-sm font-medium">Current Balance</p>
          <p className="text-3xl font-bold mt-2">{currentBalance}</p>
        </div>
        
        <h3 className="font-medium text-khwela-blue mb-3">Top Up Options</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {predefinedAmounts.map(amount => (
            <Button 
              key={amount}
              variant={selectedAmount === amount ? "default" : "outline"} 
              className={selectedAmount === amount ? "bg-khwela-blue" : "border-khwela-blue text-khwela-blue"}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
            >
              R{amount}
            </Button>
          ))}
        </div>
        
        <div className="space-y-2 mb-4">
          <Label htmlFor="custom-amount">Custom Amount</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              R
            </span>
            <Input
              id="custom-amount"
              type="number" 
              placeholder="Enter amount" 
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="rounded-l-none"
            />
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-khwela-blue hover:bg-khwela-blue/90">
              Top Up Now
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Funds to Your Wallet</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="bg-khwela-light/30 p-4 rounded-lg">
                <p className="font-medium text-khwela-blue">Selected Amount</p>
                <p className="text-2xl font-bold mt-1">
                  R{selectedAmount?.toFixed(2) || (customAmount ? parseFloat(customAmount).toFixed(2) : "0.00")}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="0000 0000 0000 0000" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-khwela-blue hover:bg-khwela-blue/90"
                  onClick={handleTopUp}
                >
                  <CreditCard className="mr-2" size={16} />
                  Pay and Top Up
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default WalletTopUp;
