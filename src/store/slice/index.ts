// climaSlice.ts
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { SearchType } from '../../types/search.types';
import { ForecastType } from '../../types/forecast.types';
import { ClimateType } from '../../types/climate.types';

interface ClimateState {
  climate: ClimateType;
  forecast: ForecastType[];
}

const initialState: ClimateState = {
  climate: {} as ClimateType,
  forecast: [],
};

export const climaSlice = createSlice({
  name: 'clima',
  initialState,
  reducers: {
    setClimate: (state, action: PayloadAction<ClimateType>) => {
      state.climate = action.payload;
    },
    setForecast: (state, action: PayloadAction<ForecastType[]>) => {
      state.forecast = action.payload;
    },
  },
});

export const { setClimate, setForecast} = climaSlice.actions;

export const getClimateOfState = (state: RootState) => state.climate;
export const getForecastOfState = (state: RootState) => state.forecast;

export const fetchingClimate = createAction<SearchType>('clima/fetchClimate');
export const fetchingForecast = createAction<SearchType>('clima/fetchForecast');
