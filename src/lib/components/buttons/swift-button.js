import React, { useEffect, useState, useContext } from "react"
import classNames from "classnames"
import BarLoader from "react-spinners/BarLoader"
import { SwiftButtonStyled } from "./swift-button-style"
import { darken } from "polished"
import SwiftIcon from "../icons/swift-icon"
import IndicatorSimple from "../indicator/simple"
import { SwiftTheme } from "../providers"

const SwiftButtonContent = (props) => {
  //console.log("SPC props", props);
  return (
    <>
      {props.loading ? (
        <div className="loader">
          <BarLoader />
        </div>
      ) : null}
      {props.disabled && props.disabledPrompt ? (
        props.disabledPrompt
      ) : props.icon && props.children ? (
        <>
          <SwiftIcon i={props.icon} />
          <span>{props.children}</span>
        </>
      ) : props.icon ? (
        <SwiftIcon i={props.icon} />
      ) : props.indicator && props.children ? (
        <>
          <IndicatorSimple color={props.indicator} />
          <span>{props.children}</span>
        </>
      ) : (
        <>{props.children}</>
      )}
    </>
  )
}

const SwiftButton = (props) => {
  useEffect(() => {}, [props])

  const swiftTheme = useContext(SwiftTheme)
  console.log("swiftbutton - swiftTheme", swiftTheme)

  const [modal, setModal] = useState(null)

  return (
    <>
      <SwiftButtonStyled
        className={classNames(props.disabled ? "disabled" : null, props.className || null, "swift-button")}
        flip={props.flip ?? null}
        type={props.type}
        size={props.size ?? null}
        inlineForm={props.inlineForm ?? null}
        width={props.width ?? null}
        variant={props.variant ?? null}
        fillType={props.fillType ?? "filled"}
        buttonColor={props.color ?? swiftTheme.color.primary}
        disabled={props.disabled ?? null}
        isLoading={props.loading ?? undefined}
        style={props.style ?? undefined}
        indicator={props.indicator ?? undefined}
        iconPos={props.iconPos ?? undefined}
        onClick={props.onClick ? props.onClick : props.modal ? () => setModal(props.modal) : undefined}
        theme={props.theme}
      >
        {props.href ? <SwiftButtonContent {...props} /> : <SwiftButtonContent {...props} />}
      </SwiftButtonStyled>
    </>
  )
}
SwiftButton.defaultProps = {
  theme: "default",
  size: "medium",
}

export default SwiftButton
