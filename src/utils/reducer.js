import { reducerCases } from './Contants'

export const initialState = {
	token: null,
}

const reducer = (state, action) => {
	console.log('Action Type : ', action.type)
	switch (action.type) {
		case reducerCases.SET_TOKEN: {
			return {
				...state,
				token: action.payload,
			}
		}
		default:
			return state
	}
}

export default reducer
