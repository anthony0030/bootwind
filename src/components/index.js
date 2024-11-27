import alerts from "./alerts.js";
import buttons from "./buttons.js";
import form from "./form.js";
import pagy from "./pagy.js";

export default function (pluginAPI) {
  alerts(pluginAPI);
  buttons(pluginAPI);
  form(pluginAPI);
  pagy(pluginAPI);
}
