import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#256D85" : "#256D85",
      },
      secondary: {
        main: darkMode ? "#06283D" : "#06283D",
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          borderRight: "4px solid transparent",
          "&$selected": {
            borderRight: "4px solid #256D85",
            fontWeight: "700",
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: "none",
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: "0px",
        },
        outlined: {
          backgroundColor: darkMode ? "#964ec215" : "#964ec215",
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
