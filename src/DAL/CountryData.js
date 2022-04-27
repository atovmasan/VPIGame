import 'firebase/firestore'
import { collection, getDocs, query, where  } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import { GiveDataActionCreator, ShowDataActionCreator } from "../Redux/ContentReducer"
import { Firestore } from 'firebase/firestore'


export const thunkDataCreator = ThunkDataForPosts => async dispatch => {
    let CountriesData = 5
    const querySnapshot = await getDocs(collection(getFirestore(), "EveryData"))
    querySnapshot.forEach((doc) => {
        CountriesData = doc
        dispatch(GiveDataActionCreator(CountriesData.data()))
        dispatch(ShowDataActionCreator())
    })
}

export const thunkDataListCreator = (name) => {
    return async function ThunkDataForList(dispatch, getState) {
        for (let i = 0; i <= getState().ContentReducer.CountryData.CountriesTruth[0].LastCountryID; i++) {
            let CName = getState().ContentReducer.CountryData.CountriesTruth[i].name
            if (CName === name) {
                console.log(getState().ContentReducer.CountryData.CountriesTruth[i])
            }
        }
    }
}