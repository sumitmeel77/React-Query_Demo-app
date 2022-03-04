import axios from 'axios'
import React from 'react'
import {
    useQuery
} from 'react-query'
const fetchData = async () => {
    try {
        const { data } = await axios.get("https://gorest.co.in/public/v2/posts");
        return data;
    }
    catch (error) {
        Error("No data")
    }


}
export default function Home() {
    const { data, isLoading, error } = useQuery('getData', fetchData) // getData is (unique key that need to provided to each key)
    return (
        <>
            {console.log(data)}
        </>
    )
}
