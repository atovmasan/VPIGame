import { GiveExtraDataActionCreator } from "../Redux/ContentReducer"



export const NewParametrThunkCreator = (id, name) => {
    return async function Parametr(dispatch, getState) {
        let data = getState().ContentReducer.CountryData
        data.CountriesTruth[id].LastElementID = data.CountriesTruth[id].LastElementID + 1
        data.CountriesTruth[id].Economy.push({
            coffers: {
                count: 1,
                id: data.CountriesTruth[id].LastElementID,
                name: name
            }
        })
        data.CountriesTruth[id].Growhts.push({
            coffers: {
                count: 1,
                id: data.CountriesTruth[id].LastElementID,
                name: name
            }
        })
        console.log(data)
        dispatch(GiveExtraDataActionCreator(data))
    }
}