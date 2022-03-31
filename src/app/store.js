import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice'
import quotesReducer from '../features/quotes/quotesSlice';
import weatherReducer from '../features/weather/weatherSlice';
import backgroundsReducer from '../features/backgrounds/backgroundsSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    quotes: quotesReducer,
    weather: weatherReducer,
    backgrounds: backgroundsReducer
  },
});
