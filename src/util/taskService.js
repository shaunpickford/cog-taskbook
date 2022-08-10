import Task from "../classes/Task";

// Hard coded tasks (temporary)
let allTasks = [
    new Task(1, "Setup project"),
    new Task(2, "Create Components"),
    new Task(3, "Debug code")
];

export const getAllTasks = async function () {
    // TODO: Uncomment the fetch code below to connect to backend
    /*const fetchResponse = await fetch("[backend_url:[backend_port]/api/taskbook-service/tasks]", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
    const data = await fetchResponse.json();

    // data will be an array of Objects for the api/taskbook-service/tasks endpoint
    // NOTE: Always be sure to look at your data variable to see what structure the data is in,
    //  as it is dependent on how the backend returns
    console.log(data);
    
    return data;
    */


    // Fetch tasks from database
    return allTasks;
}

export const getTaskById = async function (id) {
    let matchedTask = allTasks.find((t) => {
        return t.id === id;
    });

    return matchedTask;
}

export const updateTask = async (taskData) => {
    const fetchResponse = await fetch("[backend_url:[backend_port]/api/taskbook-service/tasks]", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    });

    const data = await fetchResponse.json();

    console.log(data);
    
    return data;
}