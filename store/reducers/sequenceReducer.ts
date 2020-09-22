import { createSlice } from '@reduxjs/toolkit';
import { type } from 'os';

type TInitialSequences = {
  list: string[];
  clickedSequence: string;
};

type TActionInitialSequences = {
  payload: TInitialSequences;
  type: string;
};

type TActionClickedSequence = {
  payload: string;
  type: string;
};

const sequenceSlice = createSlice({
  name: 'sequence',
  initialState: {
    initialSequences: {
      list: ['ifelse', 'sequence'],
      clickedSequence: '',
    },
  },

  reducers: {
    setInitialSequences: (state, action: TActionInitialSequences) => {
      state.initialSequences = action.payload;
    },
    changeCurrent: (state, action: TActionClickedSequence) => {
      state.initialSequences.clickedSequence = action.payload;
    },
  },
});

export const selectSequence = (state): TInitialSequences =>
  state.sequences.initialSequences;
export const selectCurrentSequence = (state): string =>
  state.sequences.initialSequences.clickedSequence;

export const { setInitialSequences, changeCurrent } = sequenceSlice.actions;
export default sequenceSlice.reducer;
