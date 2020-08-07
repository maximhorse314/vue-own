import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";

import {
    LOGIN
} from './actions.type';
import {
    SET_AUTH,
    SET_ERROR
} from './mutations.type';

const state = {
    errors: null,
    user: {},
    isAuthenticated: false
};

const mutations = {
    [SET_AUTH] (state, user) {
        state.user = user;
        state.errors = null;
        state.isAuthenticated = true
    },
    [SET_ERROR] (state, errors) {
        state.errors = errors;
    }
};

const getters = {};

const actions = {
    [LOGIN] (context, credentials) {
        return new Promise((resolve) => {
            ApiService.post('users/login', {user: credentials})
            .then(({data}) => {
                context.commit(SET_AUTH, data.user);
                resolve(data);
            })
            .catch(({response}) => {
                context.commit(SET_ERROR, response.data.errors)
            });
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};