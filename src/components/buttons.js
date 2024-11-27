export default function ({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "center",
      whiteSpace: "nowrap",
      userSelect: "none",
      textDecoration: "none",
      borderStyle: "solid",
      borderRadius: theme("borderRadius.md"),
      padding: "0.5rem 1rem",
      fontSize: theme("fontSize.sm"),
      fontWeight: "600",
      cursor: "pointer",
      outline: "none",
      focusRing: "2px",
    },
    ".btn-primary": {
      backgroundColor: theme("colors.blue.600"),
      color: theme("colors.white"),
      borderColor: theme("colors.blue.600"),
      "&:hover": {
        backgroundColor: theme("colors.blue.700"),
        borderColor: theme("colors.blue.700"),
      },
      "&:focus": {
        ringColor: theme("colors.blue.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.blue.800"),
        borderColor: theme("colors.blue.800"),
      },
    },
    ".btn-secondary": {
      backgroundColor: theme("colors.gray.600"),
      color: theme("colors.white"),
      borderColor: theme("colors.gray.600"),
      "&:hover": {
        backgroundColor: theme("colors.gray.700"),
        borderColor: theme("colors.gray.700"),
      },
      "&:focus": {
        ringColor: theme("colors.gray.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.gray.800"),
        borderColor: theme("colors.gray.800"),
      },
    },
    ".btn-success": {
      backgroundColor: theme("colors.green.600"),
      color: theme("colors.white"),
      borderColor: theme("colors.green.600"),
      "&:hover": {
        backgroundColor: theme("colors.green.700"),
        borderColor: theme("colors.green.700"),
      },
      "&:focus": {
        ringColor: theme("colors.green.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.green.800"),
        borderColor: theme("colors.green.800"),
      },
    },
    ".btn-danger": {
      backgroundColor: theme("colors.red.600"),
      color: theme("colors.white"),
      borderColor: theme("colors.red.600"),
      "&:hover": {
        backgroundColor: theme("colors.red.700"),
        borderColor: theme("colors.red.700"),
      },
      "&:focus": {
        ringColor: theme("colors.red.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.red.800"),
        borderColor: theme("colors.red.800"),
      },
    },
    ".btn-warning": {
      backgroundColor: theme("colors.yellow.500"),
      color: theme("colors.black"),
      borderColor: theme("colors.yellow.500"),
      "&:hover": {
        backgroundColor: theme("colors.yellow.600"),
        borderColor: theme("colors.yellow.600"),
      },
      "&:focus": {
        ringColor: theme("colors.yellow.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.yellow.700"),
        borderColor: theme("colors.yellow.700"),
      },
    },
    ".btn-info": {
      backgroundColor: theme("colors.cyan.600"),
      color: theme("colors.white"),
      borderColor: theme("colors.cyan.600"),
      "&:hover": {
        backgroundColor: theme("colors.cyan.700"),
        borderColor: theme("colors.cyan.700"),
      },
      "&:focus": {
        ringColor: theme("colors.cyan.300"),
      },
      "&:active": {
        backgroundColor: theme("colors.cyan.800"),
        borderColor: theme("colors.cyan.800"),
      },
    },
    ".btn-light": {
      backgroundColor: theme("colors.gray.200"),
      color: theme("colors.black"),
      borderColor: theme("colors.gray.200"),
      "&:hover": {
        backgroundColor: theme("colors.gray.300"),
        borderColor: theme("colors.gray.300"),
      },
      "&:focus": {
        ringColor: theme("colors.gray.100"),
      },
      "&:active": {
        backgroundColor: theme("colors.gray.400"),
        borderColor: theme("colors.gray.400"),
      },
    },
    ".btn-dark": {
      backgroundColor: theme("colors.gray.800"),
      color: theme("colors.white"),
      borderColor: theme("colors.gray.800"),
      "&:hover": {
        backgroundColor: theme("colors.gray.900"),
        borderColor: theme("colors.gray.900"),
      },
      "&:focus": {
        ringColor: theme("colors.gray.600"),
      },
      "&:active": {
        backgroundColor: theme("colors.gray.950"),
        borderColor: theme("colors.gray.950"),
      },
    },
    ".btn-link": {
      color: theme("colors.blue.600"),
      backgroundColor: "transparent",
      borderWidth: "0",
      textDecoration: "underline",
      "&:active": {
        color: theme("colors.blue.800"),
      },
    },
    ".btn-sm": {
      padding: "0.25rem 0.5rem",
      fontSize: theme("fontSize.xs"),
    },
    ".btn-lg": {
      padding: "0.75rem 1.5rem",
      fontSize: theme("fontSize.lg"),
    },
    ".btn-block": {
      width: "100%",
      textAlign: "center",
    },
    ".btn-disabled, .btn:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  };

  addComponents(buttons, {
    variants: ["responsive", "hover", "focus"],
  });
};
