
import React, { useEffect, useState } from 'react'
import { filterSearchApi } from '../services/searchApi'


function TypeSearch() {

    let [filter, setFilter] = useState('');
    let [filteredResult, setFilteredResult] = useState([])
    let [isUnavailable, setIsUnavailable] = useState(false);

    useEffect(() => {
        if (filter.length !== 0) {
            filterSearchApi(filter).then((result) => {
                if (result.length === 0) {
                    setFilteredResult([])
                    setIsUnavailable(true)
                } else {
                    setFilteredResult(result)
                    setIsUnavailable(false)
                }
            })
        } else {
            setFilteredResult([])
            setIsUnavailable(false)
        }
    }, [filter])


    const onHandleSearch = async (val) => {
        let userInput = val.target.value
        setFilter(userInput)
    }

    const handleItemClick = (element) => {
        setFilter(element.target.innerHTML)
        setFilteredResult([])
    }

    return (

        <div className='container mt-5 d-flex flex-column align-item-center justify-content-center'>
            <div className='form-group col-sm-6 d-flex align-item-center justify-content-center flex-column mx-auto pt-4'>
                <label htmlFor='my-data' className='text-secondary mt-8'>Search for names</label>
                <input onChange={onHandleSearch} value={filter} name="myInput" id="my-data" className='form-control col-sm-2 bg-light text-dark' />
                {isUnavailable && <span className='text-secondary'>No result found!</span>}
            </div>
            <div className='col-sm-6 justify-content-center mx-auto'>
                {
                    filter && filteredResult?.length >0 && 
                    <ul className='list-group'>
                    {filteredResult.map((item, index) => {
                        return (
                            <li key={index} className='list-group-item text-align-left' onClick={handleItemClick}>{item}</li>
                        )
                    })}
                </ul>
                }
                
            </div>

        </div>
    )
}
export default TypeSearch