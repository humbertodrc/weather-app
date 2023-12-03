// store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './saga';
import { climaSlice } from './slice';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: climaSlice.reducer,
  middleware : [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
