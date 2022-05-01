import { SaveDataActionCreator } from "../Redux/ContentReducer"

export const NewCountry = (name) => {
    return async function NC(dispatch, getState) {
        let CountyList = getState().ContentReducer.CountryData.CountriesTruth
        CountyList[0].LastCountryID++
        CountyList.push({
            id:  getState().ContentReducer.CountryData.CountriesTruth[0].id + getState().ContentReducer.CountryData.CountriesTruth[0].LastCountryID,
            name: name,
            LastElementID: 1,
            Economy: [
                {"coffers": {id: 0, name: "coffers", count: 1000}}
            ],
            Growhts: [
                {"coffers": {id: 0, name: "coffers", count: 1000}}
            ]
    })
    dispatch(SaveDataActionCreator(CountyList))
    }
}