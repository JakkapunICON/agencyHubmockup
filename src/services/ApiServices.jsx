import axios from 'axios';
import { Component } from 'react';

// import configData from '../_mock/Smartsales 1.5.postman_collection-2.json';

class ApiServices extends Component {
    static GetDataJson = async () => {
        try {
            const result = await axios({
                url: '/',
                method: 'GET'
                // body
                // headers
            }).catch((error) => {
                console.log(error);
            });
            return result;
        } catch (error) {
            console.log(error.messege);
        }
    };
}

export default ApiServices;
