const GIVE_DATA = "GIVE-DATA"
const NEW_DATA = "NEW-DATA"
const SAVE_DATA = "SAVE-DATA"
const SHOW_DATA = "SHOW-DATA"
const GIVE_EXTRA_DATA = "GIVE-EXTRA-DATA"



let initialState = {
    CountryData: {
        IsShowData: false,
        CountriesTruth: [
            {
                name: "I do not know",
                id: 0,
                Economy: [
                    {
                        coffers: {
                            count: 1,
                            id: 0
                        }
                    }
                ],
                Growhts: [
                    {
                        coffers: {
                            count: 1,
                            id: 0
                        }
                    }
                ]
            }
        ]
    }

}


export const ContentReducer = (state = initialState, action) => {
    if (action.type === GIVE_DATA) {
        return { ...state, CountryData: action.country }
    }
    if (action.type === GIVE_EXTRA_DATA) {
        return { ...state, CountryData: action.data }
    }
    if (action.type === NEW_DATA) {
        return { ...state, CountriesTruth: action.newData }
    }
    if (action.type === SAVE_DATA) {
        return { ...state, CountriesTruth: action.savedD }
    }
    if (action.type === SHOW_DATA) {
        return { ...state, IsShowData: true }
    }
    return state
}


export const GiveDataActionCreator = (CountryData) => ({ type: GIVE_DATA, country: CountryData })
export const GiveExtraDataActionCreator = (Data) => ({ type: GIVE_EXTRA_DATA, data: Data })
export const NewDataActionCreator = (NewData) => ({ type: NEW_DATA, newData: NewData })
export const SaveDataActionCreator = (savedData) => ({ type: SAVE_DATA, savedD: savedData })
export const ShowDataActionCreator = () => ({ type: SHOW_DATA })

export default ContentReducer