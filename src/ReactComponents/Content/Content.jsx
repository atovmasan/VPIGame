import React from 'react'
import "./Content.css"
import { Button } from "antd"
import { thunkDataCreator, thunkDataListCreator } from "../../DAL/CountryData"
import { useDispatch } from "react-redux"
import { useState } from 'react'
import { NewCountry } from '../../DAL/NewCountry'



export let Content = (props) => {
    let listMap = props.data.CountriesTruth.map(data =>
        <li onClick={() => dispatch(thunkDataListCreator(data.name))}>
            {data.name}
        </li>
    )


    const [parametr, setParametr] = useState()
    function changeParametr(event) {
        setParametr(event.target.value)
    }

    const dispatch = useDispatch()
    const [list, setList] = useState(0)
    return (
        <div>
            <div className={"BT"}>
                <Button key={"MainButton"} onClick={() => dispatch(thunkDataCreator())} >Увидеть страны</Button>
                <Button onClick={() => setList(list + 1)} >Список стран</Button>
                <div>
                <input value={parametr} onChange={changeParametr} />
                <Button onClick={() => dispatch(NewCountry(parametr))} >Добавить страну</Button>
                </div>
                
            </div>
            {
                list % 2 === 0 &&
                <ul>
                    {listMap}
                </ul>
            }
            {props.component}
        </div >
    )
}