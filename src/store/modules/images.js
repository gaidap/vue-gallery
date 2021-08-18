import api from '@/api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    fetchImages: async ({rootState, commit}) => {
        const {token} = rootState.auth;
        const response = await api.fetchImages(token);
        console.log(response);
        const {data} = response.data;
        commit('setImages', data);
    },
    uploadImages: async ({commit}, images) => {
        console.log(images);
        commit;
        "";
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}