import { defineStore } from "pinia";

export const useUserStore = defineStore(
    {
        state: () => {
            return {

                token: null
            };
        },
        getters: {
            getUserToken: (state) => state.token
        },
        actions: {
            async signup({ name, email, password, phone, address, age, nat_ID, bloodType }) {
                const reg = await this.axios.post('/users/create/',
                    { name, email, password, age, phone, address, nat_ID, bloodType, });
                const response = await this.axios.post('/auth/token/',
                    {
                        email: email,
                        password: password
                    });
                localStorage.setItem('token', response.data);
            },
            async login({ email, password }) {
                const response = await this.axios.post('/auth/token/',
                    {
                        email: email,
                        password: password
                    });
                localStorage.setItem('token', response.data);
            },
            logout() {
                localStorage.removeItem('token');
            },

        }
    }
)