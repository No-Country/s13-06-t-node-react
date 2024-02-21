import { configureStore } from '@reduxjs/toolkit';
import seatReducer from './Seat/seatReducer.js';
import travelReducer from './Travel/travelReducer.js';

const rootReducer = {
  seat: seatReducer,
  travel: travelReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
