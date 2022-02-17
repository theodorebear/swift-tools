import React, { useState, useEffect } from 'react'
import { Braintree, HostedField } from 'react-braintree-fields'
import { SwiftCreditCardStyled } from './swift-credit-card-style'
import SwiftLabel from './swift-label'
//import { Dash } from '../../../styles/global.style';
import classnames from 'classnames'
//import { _billingIntent } from "../../../ajax/billing"
import { BarLoader } from 'react-spinners'
import SwiftIcon from '../icons/swift-icon'
import { Grid, GridItem, Box } from '../grid'

const SwiftCreditCard = (props) => {
    const [tokenize, setTokenize] = useState()
    const [cardType, setCardType] = useState('')
    const [authorization, setAuthorization] = useState(null)
    const [error, setError] = useState(null)
    const [token, setToken] = useState(null)
    const [focusedFieldName, setFocusedField] = useState('')
    const numberField = React.useRef()
    const cvvField = React.useRef()
    const cardholderNameField = React.useRef()

    // get BraintreeClient::generateToken() from server to use in form!
    useEffect(() => {
        handleBillingIntent()
    }, [])
    async function handleBillingIntent() {
        //  SWIFT-FORM PACKAGE SIMPLIFICATION
        // try {
        //     const { data } = await _billingIntent()
        //     console.log("handleBillingIntent", data)
        //     if (data.token) {
        //         setAuthorization(data.token)
        //     }
        //     //setStateHook(data)
        // } catch (e) {
        //     console.log("handleBillingIntent error", e)
        // }
    }

    const onFieldBlur = (field, event) => setFocusedField('')
    const onFieldFocus = (field, event) => setFocusedField(event.emittedBy)

    if (!authorization) {
        return (
            <div>
                <BarLoader />
            </div>
        )
    }

    return (
        <SwiftCreditCardStyled>
            <Braintree
                className="form_braintree_credit_card_provider"
                authorization={authorization}
                onAuthorizationSuccess={() => {
                    //numberField.current.focus()
                }}
                onDataCollectorInstanceReady={(collector) => {
                    // DO SOMETHING with Braintree collector as needed
                }}
                onError={(newError) => {
                    setError(newError.message || String(newError))
                }}
                onCardTypeChange={({ cards }) => {
                    if (1 === cards.length) {
                        const [card] = cards
                        setCardType(card.type)
                        if (card.code && card.code.name) {
                            //cvvField.current.setPlaceholder(card.code.name)
                        } else {
                            //cvvField.current.setPlaceholder("CVV")
                        }
                    } else {
                        setCardType('')
                        //cvvField.current.setPlaceholder("CVV")
                    }
                }}
                getTokenRef={(ref) => {
                    if (props.setBraintreeTokenize && ref) {
                        props.setBraintreeTokenize(() => ref)
                    }
                }}
                styles={{
                    //form: {
                    //    height: '24px',
                    //},

                    form: {},
                    input: {
                        'font-size': '16px',
                        'font-family': 'lato',
                        '-webkit-box-shadow': '0 0 0 30px #f2f2f2 inset !important',
                    },
                    //"input:-webkit-autofill":
                    '.valid': { 'background-color': 'inherit' },
                    //':focus': {
                    //    color: 'blue',
                    //},
                }}
            >
                {/*error && <SwiftLabel error>{error}</SwiftLabel>*/}

                <Grid gap={3} templateColumns={'repeat(' + 4 + ', 1fr)'} autoRows="min-content">
                    <GridItem rowSpan={1} colSpan={2}>
                        <SwiftLabel>Credit Card #</SwiftLabel>
                        <div className="form_braintree_credit_card_input">
                            {cardType == 'visa' ? (
                                <SwiftIcon i="cc_visa" />
                            ) : cardType == 'master-card' ? (
                                <SwiftIcon i="cc_mastercard" />
                            ) : cardType == 'american-express' ? (
                                <SwiftIcon i="cc_amex" />
                            ) : cardType == 'discover' ? (
                                <SwiftIcon i="cc_discover" />
                            ) : cardType == 'diners-club' ? (
                                <SwiftIcon i="cc_diners" />
                            ) : (
                                <SwiftIcon i="cc" />
                            )}
                            <div className="form_braintree_credit_card_input_field">
                                <HostedField
                                    type="number"
                                    className={classnames({
                                        braintree_input: true,
                                        focused: 'number' === focusedFieldName,
                                    })}
                                    onBlur={onFieldBlur}
                                    onFocus={onFieldFocus}
                                    prefill={process.env.NODE_ENV == 'development' ? '' : undefined}
                                    ref={numberField}
                                />
                            </div>
                        </div>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <SwiftLabel>Name on Card</SwiftLabel>
                        <div className="form_braintree_credit_card_input">
                            <div className="form_braintree_credit_card_input_field">
                                <HostedField
                                    type="cardholderName"
                                    className={classnames({
                                        braintree_input: true,
                                        focused: 'cardholderName' === focusedFieldName,
                                    })}
                                    onBlur={onFieldBlur}
                                    onFocus={onFieldFocus}
                                    placeholder=""
                                    ref={cardholderNameField}
                                    prefill={process.env.NODE_ENV == 'development' ? '' : undefined}
                                />
                            </div>
                        </div>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={2}>
                        <SwiftLabel>Expiration Date</SwiftLabel>
                        <div className="form_braintree_credit_card_input">
                            <div className="form_braintree_credit_card_input_field">
                                <HostedField
                                    type="expirationDate"
                                    onBlur={onFieldBlur}
                                    onFocus={onFieldFocus}
                                    placeholder="MM / YYYY"
                                    prefill={process.env.NODE_ENV == 'development' ? '' : undefined}
                                    className={classnames({
                                        braintree_input: true,
                                        focused: 'expirationDate' === focusedFieldName,
                                    })}
                                />
                            </div>
                        </div>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        {/*Month:
                <HostedField type="expirationMonth" />
                Year:
                <HostedField type="expirationYear" />*/}

                        <SwiftLabel>CVV</SwiftLabel>
                        <div className="form_braintree_credit_card_input">
                            <div className="form_braintree_credit_card_input_field">
                                <HostedField
                                    type="cvv"
                                    placeholder="555"
                                    prefill={process.env.NODE_ENV == 'development' ? '' : undefined}
                                    ref={cvvField}
                                    className={classnames({
                                        braintree_input: true,
                                        focused: 'CVV' === focusedFieldName,
                                    })}
                                />
                            </div>
                        </div>
                    </GridItem>

                    {/*<GridItem rowSpan={1} colSpan={2}>
                        <SwiftLabel>Zip</SwiftLabel>
                        <div className="form_braintree_credit_card_input">
                            <div className="form_braintree_credit_card_input_field">
                                <HostedField
                                    type="postalCode"
                                    prefill={process.env.NODE_ENV == "development" ? "" : undefined}
                                    className={classnames({
                                        braintree_input: true,
                                        focused: "postalCode" === focusedFieldName,
                                    })}
                                />
                            </div>
                        </div>
                    </GridItem>*/}
                </Grid>
            </Braintree>
            {/*<div className="footer">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    tokenize().then(setToken).catch(handleError)
                                }}
                            >
                                Get nonce token
                            </button>
                        </div>*/}
        </SwiftCreditCardStyled>
    )
}

export default SwiftCreditCard
