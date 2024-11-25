import React from 'react'
import "./css/Bodyy.css"
import Photo from './Photo'
import Category1 from './Category1'
import Category2 from './Category2'
import Category3 from './Category3'
import Category4 from './Category4'
import GetBirthStone from './GetBirthStone'
import Certified from './Certified'

export default function Bodyy() {
  return (
    <>
    <div className="main-body">
        <Photo />
        <hr />
        <Category1 />
        <hr />
        <Category2 />
        <hr />
        <GetBirthStone />
        <hr />
        <Category3 />
        <hr />
        <Category4 />
        <hr />
        <Certified />
    </div>
    </>
  )
}
