import { colord } from "colord";

export default function ({ addComponents, theme }) {

  const getTextColor = (hex) => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    // Calculate luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Return white for dark backgrounds, black for light backgrounds
    return luminance > 0.5 ? theme('colors.black') : theme('colors.white');
  };


  const makeButton = (options) => {

    const {
      btn_bg,
      btn_color,
      btn_border_color,
      btn_hover_bg,
      btn_hover_color,
      btn_hover_border_color,
      btn_active_bg,
      btn_active_color,
      btn_active_border_color,
      btn_disabled_bg,
      btn_disabled_color,
      btn_disabled_border_color
    } = options;

    const button = {
      color: btn_color,
      backgroundColor: btn_bg,
      borderColor: btn_border_color,
      "&:hover, &.hover": {
        color: btn_hover_color,
        backgroundColor: btn_hover_bg,
        borderColor: btn_hover_border_color,
      },
      "&:focus, &.focus": {
      //   ringColor: theme(`colors.${color}.300`),
      },
      "&:active, &.active": {
        color: btn_active_color,
        backgroundColor: btn_active_bg,
        borderColor: btn_active_border_color,
      },
      "&:disabled, &.disabled": {
        color: btn_disabled_color,
        backgroundColor: btn_disabled_bg,
        borderColor: btn_disabled_border_color,
      },
    }

    return button;
  }



  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  const buttons = {};

  buttons[`.btn`] ={
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "center",
    userSelect: "none",
    textDecoration: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: theme("borderRadius.md"),
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: "400",
    cursor: "pointer",
    lineHeight: "1.5",
    backgroundColor: theme('colors.transparent'),
    color: "#212529",
    transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",

    outline: "none",
    focusRing: "2px",
    whiteSpace: "nowrap",
  };

  buttons[`.btn-sm`] ={
    padding: "0.25rem 0.5rem",
    fontSize: "0.875rem",
    borderRadius: theme("borderRadius.sm"),
  };

  buttons[`.btn-lg`] ={
    padding: "0.5rem 1rem",
    fontSize: "1.25rem",
    borderRadius: theme("borderRadius.lg"),
  };

  colors.forEach(theme_color_name => {
    const color = theme(`colors.${theme_color_name}.DEFAULT`);

    const btn_options = {
      btn_bg: color,
      btn_color: getTextColor(color),
      btn_border_color: color,

      btn_hover_bg: colord(color).darken(0.05).toHex(),
      btn_hover_color: getTextColor(colord(color).darken(0.05).toHex()),
      btn_hover_border_color: colord(color).darken(0.11).toHex(),

      btn_active_bg: colord(color).darken(0.08).toHex(),
      btn_active_color: getTextColor(colord(color).darken(0.08).toHex()),
      btn_active_border_color: colord(color).darken(0.13).toHex(),

      btn_disabled_bg: colord(color).darken(0.20).toHex(),
      btn_disabled_color: getTextColor(colord(color).darken(0.20).toHex()),
      btn_disabled_border_color: colord(color).darken(0.20).toHex(),

      // btn_active_shadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
      // btn_focus_shadow_rgb: "217, 164, 6",
    };

    buttons[`.btn-${theme_color_name}`] = makeButton(btn_options);


    const btn_outline_options = {
      btn_bg: theme('colors.transparent'),
      btn_color: color,
      btn_border_color: color,

      btn_hover_bg: color,
      btn_hover_color: getTextColor(color),
      btn_hover_border_color: color,

      btn_active_bg: colord(color).darken(0.08).toHex(),
      btn_active_color: getTextColor(colord(color).darken(0.08).toHex()),
      btn_active_border_color: colord(color).darken(0.13).toHex(),

      btn_disabled_bg: theme('colors.transparent'),
      btn_disabled_color: colord(color).darken(0.20).toHex(),
      btn_disabled_border_color: colord(color).darken(0.20).toHex(),

      // btn_active_shadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
      // btn_focus_shadow_rgb: "217, 164, 6",
    };


    buttons[`.btn-outline-${theme_color_name}`] = makeButton(btn_outline_options);
  });

  addComponents(buttons);
};
