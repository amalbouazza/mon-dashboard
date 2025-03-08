import Sidebar from "~/components/Sidebar";
import MainContent from "~/components/MainContent";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}