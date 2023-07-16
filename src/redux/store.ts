import { configureStore } from '@reduxjs/toolkit';
import authReducer, {AuthState} from './reducers/auth';
import user, {UserState} from "./reducers/user";
import config, {ConfigState} from "./reducers/config";
import product, {ProductState} from "./reducers/product";
import task, {TaskState} from "./reducers/task";


export interface RootState {
    auth: AuthState;
    config: ConfigState;
    user: UserState;
    product: ProductState;
    task : TaskState;
}

export const store = configureStore({
    reducer: {
        auth: authReducer,
        config: config,
        user: user,
        product: product,
        task : task,
    },
});

export type AppDispatch = typeof store.dispatch;