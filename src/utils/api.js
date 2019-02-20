export const formatHotspot = (axisX, axisY) => {
  const uuid =
    "hotspot_" +
    Math.floor(Math.random() * 1000) +
    Math.floor(Math.random() * 1000) +
    Math.floor(Math.random() * 1000);
  return {
    id: uuid,
    timestamp: Date.now(),
    x: axisX,
    y: axisY
  };
};
export const buildHotspot = (formattedHotspot, title, text) => {
  return {
    id: formattedHotspot.id,
    text: text,
    timestamp: Date.now(),
    title: title,
    x: formattedHotspot.x,
    y: formattedHotspot.y
  };
};

var Storage = JSON.parse(localStorage.getItem("list_todos")) || [];
