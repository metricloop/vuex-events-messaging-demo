import namespace from './namespace'

//Messages Module
export const messages = namespace('messages', {
    getters: [
        'messages'
    ],
    actions: [
        'customMessage',
        'genericMessage',
        'genericDismissMessage',

        'successMessage',
        'successDismissMessage',

        'errorMessage',
        'errorDismissMessage',

        'trashMessage',
        'trashDismissMessage',

        'warningMessage',
        'warningDismissMessage',

        'infoMessage',
        'infoDismissMessage',

        'removeMessage'
    ],
    mutations: [
        'ADD_MESSAGE',
        'REMOVE_MESSAGE'
    ]
});