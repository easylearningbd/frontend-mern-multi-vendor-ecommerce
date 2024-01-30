import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
import homeReducer from "./reducers/homeReducer";

const rootReducer = {
    home: homeReducer,
    auth: authReducer,
    card: cardReducer
}
export default rootReducer;