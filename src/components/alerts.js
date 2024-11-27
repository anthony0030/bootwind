export default function ({ addComponents, theme }) {
  const alertStyles = {
    ".alert": {
      backgroundColor: theme("colors.gray.100"),
      color: theme("colors.gray.700"),
      padding: theme("spacing.4"),
      borderRadius: theme("borderRadius.md"),
      fontSize: theme("fontSize.sm"),
      fontFamily: theme("fontFamily.sans"),
      "@apply dark:bg-gray-800 dark:text-white": {},
    },

    ".alert svg": {
      color: theme("colors.gray.400"),
    },

    ".alert.alert-info": {
      backgroundColor: theme("colors.blue.50"),
      color: theme("colors.blue.700"),
      "@apply dark:bg-gray-800 dark:text-blue-400": {},
    },

    ".alert.alert-info svg": {
      color: theme("colors.blue.400"),
    },

    ".alert.alert-success": {
      backgroundColor: theme("colors.green.50"),
      color: theme("colors.green.700"),
      "@apply dark:bg-gray-800 dark:text-green-400": {},
    },

    ".alert.alert-success svg": {
      color: theme("colors.green.400"),
    },

    ".alert.alert-error": {
      backgroundColor: theme("colors.red.50"),
      color: theme("colors.red.700"),
      "@apply dark:bg-gray-800 dark:text-red-400": {},
    },

    ".alert.alert-error svg": {
      color: theme("colors.red.400"),
    },

    ".alert.alert-warning": {
      backgroundColor: theme("colors.yellow.50"),
      color: theme("colors.yellow.700"),
      "@apply dark:bg-gray-800 dark:text-yellow-400": {},
    },

    ".alert.alert-warning svg": {
      color: theme("colors.yellow.400"),
    },

    ".alert a": {
      fontWeight: theme("fontWeight.semibold"),
    },
  };

  addComponents(alertStyles);
};
