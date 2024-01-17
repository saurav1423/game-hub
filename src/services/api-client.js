import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'ddc907762ac9495994d9a79c5e581342'
    }
})