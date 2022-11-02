import { configureStore } from "@reduxjs/toolkit";
import dataSlicer from "../stateSlicer/DataSlicer";

const store = configureStore({
  reducer: {
    data: dataSlicer,
  },
});

export default store;
