import { colord } from "colord";

export default function ({ addComponents, theme }) {
  const pagy = {
    ".pagy .nav": {
      display: "inline-flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    ".pagy .nav a:first-child": {
      borderTopLeftRadius: theme("borderRadius.md"),
      borderBottomLeftRadius: theme("borderRadius.md"),
    },

    ".pagy .nav a:last-child": {
      borderTopRightRadius: theme("borderRadius.md"),
      borderBottomRightRadius: theme("borderRadius.md"),
    },

    ".pagy .nav a:not(.gap)": {
      display: "block",
      position: "relative",
      lineHeight: theme("lineHeight.tight"),
      backgroundColor: theme("colors.white"),
      color: theme("colors.blue.500"),
      textDecoration: "none",
      padding: `${theme("spacing.2")} ${theme("spacing.3")}`,
      fontFeatureSettings: "'tnum' on",
      marginLeft: "-1px",
      "&:hover": {
        backgroundColor: theme("colors.secondary"),
      },
    },

    ".pagy .nav a[aria-current='page'].current": {
      zIndex: 10,
      borderColor: theme("colors.primary"),
      backgroundColor: theme("colors.primary"),
      color: theme("colors.white"),
      marginLeft: "-1px",
    },

    ".pagy .nav a:not([href])": {
      backgroundColor: theme("colors.white"),
      color: theme("colors.secondary"),
      marginLeft: "-1px",
    },
  };

  addComponents(pagy);
};
