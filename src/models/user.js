import axios from '../customAxios.js';
import eventBus from '../eventBus.js';

export default {
    data: {
        isLoggedIn: false,
        me: {}
    },

    init() {
        return new Promise((resolve, reject) => {
            axios
            .get('/user/me')
            .then(res => {
                if(res.data.success) {
                    this.data.isLoggedIn = true;
                    this.data.me = res.data.me;
                } else {
                    this.data.isLoggedIn = false;
                    this.data.me = {};
                }
                console.log(res.data)
                eventBus.$emit('didLogin', res.data.me);
            })
            .catch(err => {
                reject(err);
            })
        });
        
    },

    me() {
        return new Promise((resolve, reject) => {
            if(this.data.isLoggedIn && this.data.me) {
                resolve(this.data.me);
            }
            reject();
        });
        
    },  

    login(data) {
        return new Promise((resolve, reject) => {
            axios
            .post('/user/login', data)
            .then(res => {
                if(res.data.success) {
                    this.init();
                    resolve(res.data.success);
                }
                reject(new Error(res.data.success));
            })
            .catch(err => {
                reject(err);
            });
        });
    },
    
    logout() {
        return new Promise((resolve, reject) => {
            axios
            .post('/user/logout')
            .then(res => {
                console.log(res.data)
                if(res.data.success) {
                    this.init();
                    resolve();
                }
            })
        });
    },
    
    idCheck(data) {
        return new Promise((resolve, reject) => {
            axios
            .post('/user/idCheck', data)
            .then(res => {
                if(res.data.success) {
                    resolve(res.data.check);
                }
            })
        });
    },
    
    signUp(data) {
        return new Promise((resolve, reject) => {
            axios
            .post('/user/signUp', data)
            .then(res => {
                if(res.data.success) {
                    resolve(res.data);
                }
                reject(new Error(res.data.success));
            })
        });
    }
}