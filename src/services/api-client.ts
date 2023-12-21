import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '060a3f88b1594a389bff61e12ffc499a'
    }
})

 //060a3f88b1594a389bff61e12ffc499a