import axios from "axios";
import { updateData } from "../actions/data";
import { store } from "../app";

export const fetchData = async dispatch => {
  const response = await axios.get("https://btc-predictor-2000.appspot.com/");
  dispatch(updateData(response.data));
  const response2 = await axios.get(
    "https://btc-predictor-2000.appspot.com/trends-daily/"
  );
  dispatch(updateData(response2.data));
};
