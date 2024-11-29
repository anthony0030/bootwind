import { colord } from "colord";

export default function ({ addComponents, theme }) {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  const alerts = {};

  alerts[`.alert`] = {
    position: "relative",
    padding: "1rem",
    marginBottom: "1rem",
    color: "inherit",
    backgroundColor: theme('colors.transparent'),
    border: "1px solid transparent",
    borderRadius: theme("borderRadius.DEFAULT"),
  };

  alerts[`.alert svg`] = {
    color: "inherit",
  },

  alerts[".alert a"]= {
    fontWeight: theme("fontWeight.semibold"),
  },

  colors.forEach(theme_color_name => {
    const color = theme(`colors.${theme_color_name}.DEFAULT`);

    alerts[`.alert.alert-${theme_color_name}`] = {
      backgroundColor: colord(color).lighten(0.40).toHex(),
      color: colord(color).darken(0.30).toHex(),
      borderColor: colord(color).darken(0.30).toHex(),
    };

    alerts[`.alert.alert-${theme_color_name} a`] = {
      color: colord(color).darken(0.30).toHex(),
    }

    alerts[`.alert.alert-${theme_color_name} svg`] = {
      color: colord(color).darken(0.30).toHex(),
    }
  });

  addComponents(alerts);
};
