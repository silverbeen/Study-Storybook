import React, { useState } from "react";
import PropTypes from "prop-types";

export interface TextProps {
  children: any;
  color: string;
  italic: boolean;
  underline: boolean;
  onActiveHandler: any;
  active: boolean;
}

const Text = ({
  children,
  color,
  italic,
  underline,
  onActiveHandler,
  active,
}: TextProps) => {
  const [onActive, setActive] = useState<boolean>(active);

  const style = {
    color: color,
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
  };

  function setActiveHandler() {
    setActive(!onActive);
    onActiveHandler(onActive);
  }

  return (
    <div style={{ background: onActive ? "red" : "" }}>
      <span style={style}>{children}</span>
      <div>
        <button onClick={setActiveHandler}>hello</button>
      </div>
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
};

Text.defaultProps = {
  color: "black",
  italic: false,
  underline: false,
};

export default Text;
