const axios = require("axios");

class Requests {
    constructor(route = "https://pctfapi.azurewebsites.net") {
        this.route = route;
    }

    checkHealth() {
        return axios.get(this.route + "/health");
    }

    register(data) {
        return axios.post(this.route + "/register", data);
    }

    login(email, password) {
        let data = {
            email,
            password,
        };
        return axios.post(this.route + "/login", data);
    }

    getData(token) {
        let config = {
            method: "get",
            url: this.route + "/get-user",
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        return axios.get(this.route + "/get-user", config);
    }

    addRequest(token, requestObject) {
        let config = {
            method: "post",
            url: this.route + "/add-request",
            headers: {
                Authorization: "Token " + token,
            },
        };
        return axios.post(this.route + "/add-request", requestObject, config);
    }

    getRequests(token) {
        let config = {
            method: "get",
            url: this.route + "/get-requests",
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        return axios.get(this.route + "/get-requests", config);
    }


    addVolunteer(token, volunteerObject) {
        let config = {
            method: "post",
            url: this.route + "/add-volunteer",
            headers: {
                Authorization: "Token " + token,
            },
        };
        return axios.post(this.route + "/add-volunteer", volunteerObject, config);
    }

    getVolunteers(token) {
        let config = {
            method: "get",
            url: this.route + "/get-volunteers",
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        return axios.get(this.route + "/get-volunteers", config);
    }
}

export default new Requests();
// module.exports = new Requests("http://localhost:3000")
