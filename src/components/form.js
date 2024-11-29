import { colord } from "colord";

export default function ({ addComponents, theme }) {
  const form = {
    ".form-group": {
      marginBottom: theme("spacing.4"),
    },

    ".form-label": {
      display: "block",
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.medium"),
      color: theme("colors.secondary"),
      marginBottom: theme("spacing.2"),
    },

    ".form-control": {
      display: "block",
      width: "100%",
      padding: `${theme("spacing.2")} ${theme("spacing.3")}`,
      borderWidth: "1px",
      borderColor: theme("colors.secondary"),
      borderRadius: theme("borderRadius.md"),
      boxShadow: theme("boxShadow.sm"),
      outline: "none",
      "&:focus": {
        ringColor: theme("colors.primary"),
        borderColor: theme("colors.primary"),
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
      color: theme("colors.primary"),
      backgroundColor: theme("colors.gray.100"),
      borderColor: theme("colors.gray.300"),
      borderRadius: "50%",
      "&:focus": {
        ringColor: theme("colors.blue.500"),
        ringWidth: "2px",
      },
    },

    ".form-check-input:checked": {
      backgroundColor: theme("colors.primary"),
      borderColor: theme("colors.primary"),
    },

    ".form-check-label": {
      marginLeft: theme("spacing.2"),
      fontSize: theme("fontSize.sm"),
      fontWeight: theme("fontWeight.medium"),
      color: theme("colors.secondary"),
    },

    ".form-text": {
      marginTop: theme("spacing.1"),
      fontSize: theme("fontSize.xs"),
      color: theme("colors.secondary"),
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
        ringColor: theme("colors.primary"),
        borderColor: theme("colors.primary"),
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
      color: theme("colors.danger"),
    },

    ".required .form-label::after": {
      paddingLeft: theme("spacing.1"),
      content: '"*"',
      color: theme("colors.danger"),
    },
  };

  addComponents(form);
};
