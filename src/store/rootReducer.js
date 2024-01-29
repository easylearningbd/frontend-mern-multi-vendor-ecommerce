import authReducer from "./reducers/authReducer";
import homeReducer from "./reducers/homeReducer";

const rootReducer = {
    home: homeReducer,
    auth: authReducer
}
export default rootReducer;