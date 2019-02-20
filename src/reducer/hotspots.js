import _ from "lodash";
import {
  RECEIVE_HOTSPOTS,
  DELETE_HOTSPOTS,
  ADD_HOTSPOT,
  EDIT_HOTSPOT
} from "../actions/hotspots";

export default function hotspots(state = {}, action) {
  switch (action.type) {
    case RECEIVE_HOTSPOTS:
      return {
        ...state,
        ...action.hotspots
      };
    case DELETE_HOTSPOTS:
      return _.omit(state, action.id);
    case ADD_HOTSPOT:
      return {
        ...state,
        [action.data.id]: action.data
      };
    case EDIT_HOTSPOT:
      return {
        ...state,
        [action.id]: action
      };
    default:
      return state;
  }
}
