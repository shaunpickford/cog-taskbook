import { useState, useEffect } from "react";
import { getTaskById, updateTask } from "../../util/taskService";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Grid } from "@mui/material";

function TaskDetails() {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState(null);

    // Get the task ID from the "id" parameter of the Route
    let { id } = useParams();

    /*
        This side effect will only run on component mount,
        and when the task state variable changes.
    */
    useEffect(() => {
        /*
            We set task to be null by default, so we know if we have
            downloaded the task data from the database or not. If we have, then
            the value of task will be an Object
        */
        if (task === null) {
            // This condition will only run on component mounting
            downloadTask();
        } else {
            // This condition runs once the task data has been downloaded
            setTimeout(() => {
                /*
                    Use a timeout here so we can actually see the Loading indicator.
                    Otherwise it will happen so quickly you won't see it.
                */
                setLoading(false);
            }, 2000);
        }
    }, [task]);

    // Asynchronous function that will use the taskService to download a single task record from database
    async function downloadTask() {
        // Retrieve the Task object from the taskService
        let thisTask = await getTaskById(id);

        // Set the result to the task state variable
        setTask(thisTask);
    }

    // Asynchronous function that will use the taskService to update the Task record
    // TODO: You will need to use this method as the onSubmit value for a form
    async function saveTask() {
        // You'll want to pull the data for a Task from a form...reference previous examples we have done of this
        // The task state variable in this component is an instance of the Task class, and the properties should be controlled by form fields

        // The object you provide as an argument to updateTask should be an instance of the Task class
        let updatedTask = await updateTask(task);

        // Update the state variable with the new data from the backend
        setTask(updatedTask);
    }

    return (
        <Box>
            {loading ? (
                <Box sx={{ mt: 2 }}>
                    <p><b>Loading...</b></p>
                    <CircularProgress variant="indeterminate" />
                </Box>
            ) : (
                <Box>
                    <h2>{task.text}</h2>
                    <p>
                        <b>Task ID: </b>
                        {task.id}
                    </p>
                    <p>
                        <b>Task Number: </b>
                        {task.taskNumber}
                    </p>
                    <p>
                        <b>Worked By: </b>
                        {task.workedByUserId}
                    </p>
                    <p>
                        <b>Last Updated: </b>
                        {task.lastUpdatedTimeStamp}
                    </p>
                </Box>
            )}
        </Box>
    );
}

export default TaskDetails;