export default function ({ addComponents, theme }) {
  const formStyles = {
    ".form-group": {
      marginBottom: theme("spacing.4"),
    },

    ".form-label": {
      display: "block",
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.medium"),
      color: theme("colors.gray.700"),
      marginBottom: theme("spacing.2"),
    },

    ".form-control": {
      display: "block",
      width: "100%",
      padding: `${theme("spacing.2")} ${theme("spacing.3")}`,
      borderWidth: "1px",
      borderColor: theme("colors.gray.300"),
      borderRadius: theme("borderRadius.md"),
      boxShadow: theme("boxShadow.sm"),
      outline: "none",
      "&:focus": {
        ringColor: theme("colors.indigo.500"),
        borderColor: theme("colors.indigo.500"),
      },
    },

    ".form-check": {
      display: "flex",
      alignItems: "center",
      marginBottom: theme("spacing.4"),
    },

    ".form-check-input": {
      width: theme("spacing.4"),
      height: theme("spacing.4"),
      color: theme("colors.blue.600"),
      backgroundColor: theme("colors.gray.100"),
      borderColor: theme("colors.gray.300"),
      borderRadius: "50%",
      "&:focus": {
        ringColor: theme("colors.blue.500"),
        ringWidth: "2px",
      },
    },

    ".form-check-input:checked": {
      backgroundColor: theme("colors.blue.600"),
      borderColor: theme("colors.blue.600"),
    },

    ".form-check-label": {
      marginLeft: theme("spacing.2"),
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.medium"),
      color: theme("colors.gray.700"),
    },

    ".form-text": {
      marginTop: theme("spacing.1"),
      fontSize: theme("fontSize.xs"),
      color: theme("colors.gray.500"),
    },

    ".form-select": {
      display: "block",
      width: "100%",
      padding: `${theme("spacing.2")} ${theme("spacing.3")}`,
      borderWidth: "1px",
      borderColor: theme("colors.gray.300"),
      borderRadius: theme("borderRadius.md"),
      boxShadow: theme("boxShadow.sm"),
      outline: "none",
      "&:focus": {
        ringColor: theme("colors.indigo.500"),
        borderColor: theme("colors.indigo.500"),
      },
      fontSize: theme("fontSize.sm"),
    },

    ".form-control[type='file']": {
      overflow: "hidden",
      "&::file-selector-button": {
        // "@apply btn btn-primary border-0 rounded-r-none": {},
      },
      "&:not(:disabled):not([readonly])": {
        cursor: "pointer",
      },
    },

    "input[type='file' i]": {
      appearance: "none",
      backgroundColor: "transparent",
      cursor: "default",
      textAlign: "inherit",
      textOverflow: "ellipsis",
      padding: "0",
      whiteSpace: "pre",
    },

    ".required.form-label::after": {
      paddingLeft: theme("spacing.1"),
      content: '"*"',
      color: theme("colors.red.600"),
    },

    ".required .form-label::after": {
      paddingLeft: theme("spacing.1"),
      content: '"*"',
      color: theme("colors.red.600"),
    },
  };

  // Wrap the styles inside `addComponents`
  addComponents(formStyles);
};
