class Task {
    constructor(id, text) {
        this.id = id;
        this.complete = false;
        this.createdByUserId = null;
        this.createdTimeStamp = null;
        this.lastUpdatedTimeStamp = null;
        this.parentTaskId = null;
        this.taskNumber = null;
        this.text = text;
        this.workedByUserId = null;
    }
}

export default Task;