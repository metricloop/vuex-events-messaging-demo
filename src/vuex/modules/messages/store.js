import { messages } from '../../utils/types.js';
import actions from './actions.js';

const state = {
    messages: []
};

const getters = {
    [messages.getters.messages]: state => {
        return state.messages;
    }
};

const mutations = {
    [messages.mutations.ADD_MESSAGE]: (state, message) => {
        state.messages.push(message);
    },
    [messages.mutations.REMOVE_MESSAGE]: (state, id) => {
        state.messages.some(function(message, index) {
            if(message.id == id) {
                state.messages.splice(index, 1);
            }
        });
    }
};

const module = {
    state,
    getters,
    mutations,
    actions
};

export default module;