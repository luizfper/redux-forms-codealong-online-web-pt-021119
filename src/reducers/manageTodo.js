export default function manageTodo(state = {
  todos: [],
}, action) {
	debugger
	switch (action.type){
		case 'ADD_TODO':
			return state = [...state, action.payload.text]
		default:
			return state
	}
}
