import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
    state: {
        user: {},
        account: {},
        cards: [],
        location_choices: {
            "SH": "Шымкент",
            "AL": "Алматы",
            "NS": "Нұр-Султан",
            "TZ": "Тараз",
            "AK": "Актау",
            "AT": "Атырау",
            "OS": "Өскемен",
            "KT": "Көкшетау",
            "KR": "Қарағанды",
            "KO": "Қызылорда",
            "TR": "Түркістан",
            "TK": "Талдықорған"
        }
    },

    actions: {
        get_user({commit}) {
            return axios.get("/api/v1/user/", {
                headers: {}
            })
                .then((response) => {
                    commit("set_user", response.data[0])
                    console.log(response.data[0])
                    return response;
                })
                .catch((error) => {
                    return error;
                })
        },

        get_account({commit}) {
            return axios.get("/api/v1/account/", {
                headers: {}
            })
                .then((response) => {
                    commit("set_account", response.data[0])
                    return response;
                })
                .catch((error) => {
                    return error;
                })
        },

        get_cards({commit}) {
            return axios.get("/api/v1/cards/", {
                headers: {}
            })
                .then((response) => {
                    commit("set_cards", response.data)
                    return response;
                })
                .catch((error) => {
                    return error;
                })
        },

    },

    mutations: {
        set_user(state, user) {
            state.user = user;
        },

        set_account(state, account) {
            state.account = account
        },

        set_cards(state, cards) {
            state.cards = cards;
        }
    }
})

export default store;