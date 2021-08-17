import api from '../../api/imgur';
import qs from "qs";

const IMGUR_TOKEN_KEY = 'imgur_token';

const state = {
    token: window.localStorage.getItem(IMGUR_TOKEN_KEY)
};

const getters = {
    isLoggedIn: state => !!state.token // short-hand for !== null
};

const actions = {
    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.removeItem(IMGUR_TOKEN_KEY);
        api.logout();
    },
    login: () => {
        api.login();
    },
    finalizeLogin: ({commit}, hashString) => {
        const callbackObject = qs.parse(hashString.replace('#', ''));
        commit('setToken', callbackObject.access_token);
        window.localStorage.setItem(IMGUR_TOKEN_KEY, callbackObject.access_token);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}