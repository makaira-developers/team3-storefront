import React, { Component, useContext } from 'react'

/* First we will make a new context */
const OxidCheckoutContext = React.createContext()

/* Then create a provider Component */
function OxidCheckoutProvider() {


  return (
    <OxidCheckoutContext.Provider
      value={{  }}
    >
      {this.props.children}
    </OxidCheckoutContext.Provider>
  )
}

function useOxidCheckout() {
  return useContext(OxidCheckoutContext)
}

OxidCheckoutProvider.contextType = GlobalDataContext

export default OxidCheckoutContext
export { OxidCheckoutProvider, useOxidCheckout }
