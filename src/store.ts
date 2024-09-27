import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import productsReducer from "./features/productSlice"

export const store = configureStore({
    reducer:{
        products: productsReducer
    },
})

// This takes the store.getSate and returns it to generate (infer) the types of the state
export type RootState = ReturnType<typeof store.getState>;

// This generates the type of the actions from the store.
export type AppDispatch =typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;