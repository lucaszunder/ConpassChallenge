export const RECEIVE_HOTSPOTS = "RECEIVE_HOTSPOTS";
export const DELETE_HOTSPOTS = "DELETE_HOTSPOTS";
export const ADD_HOTSPOT = "ADD_HOTSPOT";
export const EDIT_HOTSPOT = "EDIT_HOTSPOT";

export function receiveHotSpots(hotspots) {
  return {
    type: RECEIVE_HOTSPOTS,
    hotspots
  };
}

export function deleteHotSpots(id) {
  return {
    type: DELETE_HOTSPOTS,
    id
  };
}

export function handleDeleteHotspot(id) {
  return dispatch => {
    dispatch(deleteHotSpots(id));
  };
}

export function addHotspot(data) {
  return {
    type: ADD_HOTSPOT,
    data
  };
}

export function handleAddHotspot(data) {
  return dispatch => {
    dispatch(addHotspot(data));
  };
}

export function editHotspot(title, text, id) {
  return {
    type: EDIT_HOTSPOT,
    title,
    text,
    id
  };
}

export function handleEditHotspot(title, text, id) {
  return dispatch => {
    dispatch(editHotspot(title, text, id));
  };
}
