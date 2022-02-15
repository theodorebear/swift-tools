import React, { useRef, useState, useEffect } from 'react';
import { SwiftInputColorStyled } from './swift-input-color-style';
import SwiftLabel from '../swift-label/swift-label';
import classNames from 'classnames';
import { SketchPicker } from 'react-color';

const SwiftInputColor = (props) => {
  const innerRef = useRef();
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  useEffect(() => {
    if (props.autoFocus && innerRef) innerRef?.current?.focus();
  }, []);

  return (
    <SwiftInputColorStyled
      error={props.error && props.helperText ? true : false}
      entered={props.value.length > 0 ? true : false}
      showPicker={showPicker}
    >
      <SwiftLabel>{props.label}</SwiftLabel>
      <div className="swift_input_color_window">
        <div className="swift_input_color_swatch" onClick={handleClick}>
          <div className="swift_input_color_swatch_view" style={{ background: props.value }} />
          <span>{props.value}</span>
        </div>
        {props.value && (
          <div className="swift_input_color_clear" onClick={() => props.onChange('')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </div>
        )}
      </div>
      {showPicker ? (
        <div className="swift_input_color_swatch_picker">
          <div className="swift_input_color_swatch_picker_cover" onClick={handleClose} />
          <SketchPicker color={props.value} onChange={(val) => props.onChange(val.hex)} />
        </div>
      ) : null}

      {props.error && props.helperText ? <SwiftLabel error>{props.helperText}</SwiftLabel> : null}
    </SwiftInputColorStyled>
  );
};

export default SwiftInputColor;
