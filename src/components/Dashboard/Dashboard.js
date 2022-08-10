import { Link, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";

function Dashboard(props) {
    // props.currentUser
    return (
        <div>
            <h1>Dashboard Component</h1>
            <section>
                <Button variant="outlined">
                    <Link to="/tasks">View all Tasks</Link>
                </Button>
                <Button variant="outlined">
                    <Link to="/users">View all Users</Link>
                </Button>
            </section>
        </div>
    );
}

export default Dashboard;