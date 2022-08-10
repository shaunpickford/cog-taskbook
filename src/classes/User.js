class User {
    constructor(username, password, fullName, emailAddress, id) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.fullName = fullName;
        this.password = password;
        this.username = username;
    }
}

export default User;