import api from '../../api/imgur';
import qs from "qs";

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token // short-hand for !== null
};

const actions = {
    logout: ({commit}) => {
        commit('setToken', null);
        api.logout();
    },
    login: () => {
        api.login();
    },
    finalizeLogin: ({commit}, hashString) => {
        const callbackObject = qs.parse(hashString.replace('#', ''));
        commit('setToken', callbackObject.access_token);
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