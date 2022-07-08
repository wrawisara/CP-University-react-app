import MainDashboard from "./components/MainDashboard";
import Sidebar from "./components/Sidebar";
import './dashboard.css'

function Dashboard(){
    return(
    <div className="Dashboard">
        <div className="dashboardGlass">
         <Sidebar/>
         <MainDashboard/>
        <div></div>
        </div>
    </div>
    );

}
export default Dashboard;