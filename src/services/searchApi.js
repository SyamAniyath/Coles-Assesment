
import { SEARCH } from "../_helpers/constants/search";

export const filterSearchApi = (searchInput) => {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const searchData = SEARCH
                const searchResult = searchData.filter((item) => item.toLowerCase().includes(searchInput.toLowerCase()))
                resolve(searchResult)
            }, 500)
        })
    )
}