import { useState } from "react";
import { ArrowUpward } from "@mui/icons-material";
import { orangeThemeDark as theme } from "../../utils/theme";

import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  // const useStyles = makeStyles(() => ({
  //     icon: {
  //         fontSize: '3rem',
  //         color: theme.tertiary,
  //     },
  // }));

  // const classes = useStyles();

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <ArrowUpward
          sx={{
            fontSize: "3rem",
            color: theme.tertiary,
          }}
        />
      </button>
    </div>
  );
}

export default BackToTop;
