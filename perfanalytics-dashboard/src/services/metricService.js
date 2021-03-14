import axios from "axios";

const API_URL = "http://localhost:3000/metrics";

class metricService {
    findAll(fromDate) {
        return axios.get(API_URL + "?fromDate=1615300657")
        .then(response => {
            if (response.data) {
                return response.data;
            }
        })
    }
}

export default new metricService();

