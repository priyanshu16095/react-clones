import { configstore, getDefaultMiddleware } from "firebase-tools/lib/configstore"
import userReducer from '../features/users/userSlice'

export default configstore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})