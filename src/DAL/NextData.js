import { NewDataActionCreator } from "../Redux/ContentReducer"
import { thunkDataCreator } from "./CountryData"
import { doc, getFirestore, setDoc } from "firebase/firestore"



export const NextDataThunkCreator = (id, lastID) => {
    return async function NextData(dispatch, getState) {
        let data = getState().ContentReducer.CountryData.CountriesTruth
        for (let i = 0; i < lastID + 1; i++) {
            data[id].Economy[i].coffers.count = data[id].Economy[i].coffers.count + data[id].Growhts[i].coffers.count
        }
        dispatch(NewDataActionCreator(data))


        const db = getFirestore()
        await setDoc(doc(db, "EveryData", "Countries"), {
            CountriesTruth: getState().ContentReducer.CountryData.CountriesTruth
        });

        dispatch(thunkDataCreator())
    }
}

export const NextParametrThunkCreator = (id, lastID) => {
    return async function NextData(dispatch, getState) {
        let data = getState().ContentReducer.CountryData.CountriesTruth
        dispatch(NewDataActionCreator(data))


        const db = getFirestore()
        await setDoc(doc(db, "EveryData", "Countries"), {
            CountriesTruth: getState().ContentReducer.CountryData.CountriesTruth
        });

        dispatch(thunkDataCreator())
    }
}