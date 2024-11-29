import base from "./base/index.js";
import components from "./components/index.js";
import theme from "./theme/index.js";
import utilities from "./utilities/index.js";

export { theme };

export default function (pluginAPI) {
  base(pluginAPI);
  components(pluginAPI);
  utilities(pluginAPI);
}
