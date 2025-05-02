
import DriverDocuments from "./DriverDocuments";
import DriverBadgeStatus from "./DriverBadgeStatus";

const DriverComplianceCenter = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-khwela-blue mb-1">Compliance Center</h2>
        <p className="text-khwela-slate mb-6">Manage your documents and maintain your driver badge status</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DriverDocuments />
        </div>
        <div className="lg:col-span-1">
          <DriverBadgeStatus />
        </div>
      </div>
    </div>
  );
};

export default DriverComplianceCenter;
