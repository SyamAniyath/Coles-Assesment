
import React, {useState} from  'react'
import { SEARCH } from './_helpers/constants/search'

const filterSearchApi = (searchInput) =>{
    return (
        new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                const searchData = SEARCH
                const searchResult = searchData.filter((item)=> item.toLowerCase().includes(searchInput.toLowerCase()))
                resolve(searchResult)
            },500)
        })
    )
}

function TypeSearch(){

    let [filter , setFilter] = useState('');
    let [filteredResult, setFilteredResult] = useState([])


    const onHandleSearch = async(val) =>{
        let userInput = val.target.value
        setFilter(userInput)
        if(userInput){
            const result = await filterSearchApi(userInput)
            console.log(result);
            
            if(result.length === 0){
                setFilteredResult(["No Data Found"])
            }else{
                setFilteredResult(result)
            }
        }else{
            setFilteredResult([])
        }
    }

    return (
       
   <div className='container mt-5 d-flex flex-column align-item-center justify-content-center'>
            <div className='form-group col-sm-6 d-flex align-item-center justify-content-center flex-column mx-auto'>
                <label htmlFor='my-data' className='text-secondary mt-8'>Search</label>
                <input onChange={onHandleSearch} value={filter} name="myInput"  id="my-data" className='form-control col-sm-2 bg-light text-dark'/>
            </div>
            <div className='col-sm-6 justify-content-center mx-auto'>
                <ul className='list-group'>
                    {filteredResult.map((item, index) => {
                        return (
                            <li key={index} className='list-group-item text-align-left'>{item}</li>
                        )
                    })}
                </ul>
            </div>

    </div> 
    )
}
export default TypeSearch