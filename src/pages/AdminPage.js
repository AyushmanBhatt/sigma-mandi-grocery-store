import AdminSidebar from "../components/AdminSidebar";
import "../css/AdminPage.css";
import Widget from "../components/widgets";
import Featured from "../components/featured";
import Chart from "../components/chart";

const AdminPage = () => {
    return (
        <div className="adminpage">
            <AdminSidebar />
            <div className="admincontainer">
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earnings"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;