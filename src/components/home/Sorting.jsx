import React from 'react'

export const Sorting = ({setSort}) => {
  return (
    <div className='sorting-div'>
        <select onChange={e=> setSort(e.target.value)} className='sorting-div-select' name="" id="">
            <option disabled value="">SEÇİNİZ</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}
