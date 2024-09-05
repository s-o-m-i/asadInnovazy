import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export async function sendMail(body) {
    try {
        const res = await axios.post('http://localhost:5000/email', body, config);
        if (res && res.data) {
            return { output: res.data, type: "success" };
        }
    }

    catch (e) {
        const errors = e.response.data.errors;
        if (errors) {
            return { output: errors, type: "error" };
        }
    }
}