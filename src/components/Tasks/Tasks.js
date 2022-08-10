import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { getAllTasks } from "../../util/taskService";

function Tasks() {
    const [loading, setLoading] = useState(true);
    const [allTasks, setAllTasks] = useState(null);

    /*
        This side effect will only run on component mount,
        and when allTasks changes.
    */
    useEffect(() => {
        /*
            We set allTasks to be null by default, so we know if we have
            downloaded the tasks from the database or not. If we have, then
            the value of allTasks will be an Array
        */
        if (allTasks === null) {
            // This condition will only run on component mounting
            downloadTasks();
        } else {
            // This condition runs once the tasks have been downloaded
            setTimeout(() => {
                /*
                    Use a timeout here so we can actually see the Loading indicator.
                    Otherwise it will happen so quickly you won't see it.
                */
                setLoading(false);
            }, 2000);
        }
    }, [allTasks]);

    // Asynchronous function that will use the taskService to download records from database
    async function downloadTasks() {
        let _tasks = await getAllTasks();
        setAllTasks(_tasks);
    }

    function renderTask(t, idx) {
        return (
            <Box key={idx} sx={{ mb: 2 }}>
                <b>ID: </b>{t.id}
                <div style={{ display: "inline", marginLeft: "16px" }}>
                    <b>Text: </b>
                    {t.text}
                </div>
                <div>
                    <Link to={`/tasks/${t.id}`}>View Task</Link>
                </div>
            </Box>
        );
    }

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <h2>All Tasks</h2>
            </Grid>
            {loading ? (
                <Grid item>
                    <CircularProgress variant="indeterminate" />
                </Grid>
            ) : (
                <>
                    <Grid item>
                        {/* Render array of task objects */}
                        {allTasks.map(renderTask)}
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">
                            <Link to="/">Back to Dashboard</Link>
                        </Button>
                    </Grid>
                </>
            )}
        </Grid>
    );
}

export default Tasks;