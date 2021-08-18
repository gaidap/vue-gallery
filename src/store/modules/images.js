import api from '@/api/imgur';
import {router} from '@/main';

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
    uploadImages: async ({rootState}, images) => {
        if (images.length > 5) {
            alert("Only 5 files accepted.");
            return;
        }
        const {token} = rootState.auth;
        await api.uploadImages(images, token);
        await router.push('/');
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