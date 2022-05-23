import React, { Component, useState }  from 'react'
import { NextDataThunkCreator, NDataThunkCreator } from "../../DAL/NextData"
import { store } from "../../Redux/redux-store"
import "./Content.css"
import { Button } from "antd"
import { SimpleForm } from "./ContentForm"
import { DeleteCountry, DeleteParametr } from '../../Redux/ContentReducer'



export let Country = (props) => {
    const [count, setCount] = useState(false);
    let ActivateEditMode = () => {
        setCount(true)
    }
    let DeActivateEditMode = () => {
        setCount(false)
    }
    let EconomyMap = props.Economy.map(data =>
        <span>
            <p>{data.coffers.name}: {data.coffers.count} </p>
            <button onClick={() => store.dispatch(DeleteParametr(props.id, data.coffers))}/>
        </span>
    )

    let GrowhtsMap = props.Growhts.map(data =>
        <li>
            <p>{data.coffers.name}: {data.coffers.count} </p>
        </li>
    )
    return (
        <div className='Country' key={props.id}>
            <div>
                <h1>{props.name}</h1>
                {count === true &&
                    <SimpleForm props data={props} />
                }
                {
                    count === false &&
                    <p>Режим редактирования выключен</p>
                }
                <div className={"BT"}>
                    <Button onClick={() => store.dispatch(NextDataThunkCreator(props.id, props.LastElementID))} >Следующий ход</Button>
                    <Button onClick={() => store.dispatch(NDataThunkCreator(props.id, props.LastElementID))} >Добавить к значению</Button>
                </div>
                <div className={"BT"}>
                    <Button onClick={ActivateEditMode} >Редактирование</Button>
                    <Button onClick={DeActivateEditMode} >Выйти из редактирования</Button>
                    <Button onClick={() => store.dispatch(DeleteCountry(props.id))} >Удалить страну</Button>
                </div>
                <h2>Статы:</h2>
                <ul>
                    {EconomyMap}
                </ul>
            </div>
            <div>
                <h2>Изменение за ход:</h2>
                <ul>
                    {GrowhtsMap}
                </ul>
                <Button onClick={ActivateEditMode}>Новый параметр</Button>
            </div>
        </div>
    )
}