export default function ({ addComponents, theme }) {
  const paginationStyles = {
    ".pagy .nav": {
      display: "inline-flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    ".pagy .nav a:first-child": {
      borderTopLeftRadius: theme("borderRadius.sm"),
      borderBottomLeftRadius: theme("borderRadius.sm"),
    },

    ".pagy .nav a:last-child": {
      borderTopRightRadius: theme("borderRadius.sm"),
      borderBottomRightRadius: theme("borderRadius.sm"),
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
        backgroundColor: theme("colors.gray.200"),
        "@apply dark:bg-gray-700": {},  // Dark mode
      },
      "@apply dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600": {},
    },

    ".pagy .nav a[aria-current='page'].current": {
      zIndex: 10,
      borderColor: theme("colors.blue.500"),
      backgroundColor: theme("colors.blue.500"),
      color: theme("colors.white"),
      "@apply dark:bg-blue-800 dark:text-gray-200 dark:border-blue-600": {},
      marginLeft: "-1px",
    },

    ".pagy .nav a:not([href])": {
      backgroundColor: theme("colors.white"),
      color: theme("colors.gray.500"),
      "@apply dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600": {},
      marginLeft: "-1px",
    },
  };

  addComponents(paginationStyles);
};
