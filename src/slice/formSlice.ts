import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface formValues {
  firstName: string;
  lastName: string;
  email: string;
  education: string;
  experience: string;
  gender: string;
}

export interface CounterState {
  value: formValues[];
}

const initialState: CounterState = {
  value: [
   
  ],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<formValues[]>) => {
      state.value.push(...action.payload);
    },
  },
});

export const { addData } = formSlice.actions;
export const formReducer = formSlice.reducer
export const formSelector = (state: RootState) => state.form;

