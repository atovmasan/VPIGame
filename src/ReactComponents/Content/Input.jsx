import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { SaveDataActionCreator } from "../../Redux/ContentReducer"
import { NextDataThunkCreator } from "../../DAL/NextData"


export const Input = (props) => {
    const dispatch = useDispatch()

    const [datas, setData] = useState(props.data.coffers.count)
    function changeData(event) {
        setData(Number(event.target.value))
    }

    function saveData() {
        let d = { ...props.d }
        d.Growhts[d.Growhts[props.data.coffers.id].coffers.id].coffers.count = datas
        dispatch(SaveDataActionCreator(d, d.id))
        // dispatch(NextDataThunkCreator(d.id, d.LastElementID))
    }

    return (
        <div>
            <li>
                <input type="number" value={datas} onChange={changeData} />
            </li>
            <button type="button" onClick={saveData}>Сохранить изменения</button>

        </div>

    )
}