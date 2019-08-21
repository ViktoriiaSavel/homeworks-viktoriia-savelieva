import actions from './actions';
const { INCREMENT, DECREMENT, RESET } = actions;

const dispatcher = function(state = {count: 0}, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count = state.count < 21 ? state.count += 1 : state.count};
        case DECREMENT:
            return {...state, count: state.count = state.count > -9 ? state.count -= 1 : state.count};
        case RESET:
            return {...state, count: state.count = 0};
        default:
            return state;
    }
};

export default dispatcher;
