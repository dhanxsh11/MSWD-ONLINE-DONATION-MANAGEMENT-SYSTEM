export default function Authreducer (state=[null,0],action) {
    switch (action.type) {
        case "login":
            return [action.data.un,action.data.role]
            case "logout":
                return [null,0]
                default :
                return state
    }
}