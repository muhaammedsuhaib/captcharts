import React from "react";

function Button({ onClick, type, disabled, labal, style }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={style}>
      {labal}
    </button>
  );
}

export default Button;
