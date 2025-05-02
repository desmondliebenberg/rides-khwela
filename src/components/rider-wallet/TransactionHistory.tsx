
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  History, 
  ArrowDownToLine, 
  CreditCard, 
  Car, 
  DollarSign 
} from "lucide-react";

export interface Transaction {
  id: number;
  type: "top-up" | "payment" | "refund";
  amount: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  description: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "top-up":
        return <ArrowDownToLine className="h-5 w-5 text-green-600" />;
      case "payment":
        return <Car className="h-5 w-5 text-blue-600" />;
      case "refund":
        return <DollarSign className="h-5 w-5 text-purple-600" />;
      default:
        return <CreditCard className="h-5 w-5 text-gray-600" />;
    }
  };

  const getAmountDisplay = (type: string, amount: string) => {
    switch (type) {
      case "top-up":
        return <span className="text-green-600">+{amount}</span>;
      case "payment":
        return <span className="text-blue-600">-{amount}</span>;
      case "refund":
        return <span className="text-purple-600">+{amount}</span>;
      default:
        return amount;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "top-up":
        return "bg-green-100";
      case "payment":
        return "bg-blue-100";
      case "refund":
        return "bg-purple-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <Card>
      <CardHeader className="bg-khwela-light/50 border-b pb-3">
        <CardTitle className="flex items-center text-khwela-blue">
          <History className="mr-2" size={20} />
          Transaction History
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {transactions.length > 0 ? (
            <>
              {transactions.map((tx) => (
                <div key={tx.id} className="border rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${getTransactionColor(tx.type)}`}>
                      {getTransactionIcon(tx.type)}
                    </div>
                    <div>
                      <p className="font-medium text-khwela-blue">{tx.description}</p>
                      <p className="text-xs text-khwela-slate">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {getAmountDisplay(tx.type, tx.amount)}
                    </p>
                    <p className="text-xs text-khwela-slate">{tx.status}</p>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full border-khwela-blue text-khwela-blue">
                View All Transactions
              </Button>
            </>
          ) : (
            <div className="text-center py-8">
              <History className="mx-auto h-12 w-12 text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-khwela-blue">No transactions yet</h3>
              <p className="text-khwela-slate mt-1 mb-4">Your transaction history will appear here</p>
              <Button variant="outline" className="border-khwela-blue text-khwela-blue">
                Top Up Your Wallet
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
