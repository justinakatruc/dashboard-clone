import Card from "@/app/ui/dashboard/card/Card";
import Transactions from "@/app/ui/dashboard/transactions/Transactions";

function Dashboard() {
  return (
    <div className="flex gap-4">
      <div className="flex-3 flex flex-col gap-4">
        <div className="flex gap-4">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
      </div>
      <div className="flex-1">
        <div className="fixed bg-(--bgSoft) rounded-xl p-4 w-80 h-96 flex flex-col gap-4">
          Available Now
        </div>
      </div>
    </div>
  );
}

export default Dashboard;