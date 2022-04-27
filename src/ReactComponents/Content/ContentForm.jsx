import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { SaveDataActionCreator } from "../../Redux/ContentReducer"
import { NextDataThunkCreator } from "../../DAL/NextData"
import { NewParametrThunkCreator } from "../../DAL/NewParametr"
import { Input } from "./Input"


export const SimpleForm = (props) => {
    const dispatch = useDispatch()


    const [parametr, setParametr] = useState()
    function changeParametr(event) {
        setParametr(event.target.value)
    }


    function newParametr() {
        let data = { ...props.data }
        dispatch(NewParametrThunkCreator(data.id, parametr))
    }

    let GrowhtsMap = props.data.Growhts.map(data =>
        <Input data={data} d={props.data} />
    )
    return (
        <div>
            <h1 color="white">Развитие за ход(редактирование)</h1>
            <ul>
                {GrowhtsMap}
            </ul>
            <div>
                <h3>Новый параметр</h3>
                <input value={parametr} onChange={changeParametr} />
                <button type="button" onClick={newParametr}>Сохранить параметр</button>
            </div>
        </div>
    )
}
