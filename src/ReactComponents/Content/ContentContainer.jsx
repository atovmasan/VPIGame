import React from 'react'
import { Content } from "./Content"
import { connect } from "react-redux"
import "./Content.css"
import { Country } from "./Country"




let mapStateToProps = (state) => {
    let CD = state.ContentReducer.CountryData.CountriesTruth
    let componentMap = CD.map(data =>
          <Country {...data}/>
    )
    return {
        data: state.ContentReducer.CountryData,
        component: componentMap
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);