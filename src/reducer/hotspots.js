import _ from "lodash";
import {
  RECEIVE_HOTSPOTS,
  DELETE_HOTSPOTS,
  ADD_HOTSPOT,
  EDIT_HOTSPOT
} from "../actions/hotspots";

export default function hotspots(state = [], action) {
  switch (action.type) {
    case RECEIVE_HOTSPOTS:
      return state;
    case DELETE_HOTSPOTS:
      return state.filter(hotspots => state.indexOf(hotspots) != action.id);
    case ADD_HOTSPOT:
      return state.concat([action.data]);
    case EDIT_HOTSPOT:
      const { title, id, text } = action;
      return state.map(hotspots =>
        state.indexOf(hotspots) == action.id
          ? { ...hotspots, text, title }
          : hotspots
      );
    default:
      return state;
  }
}
