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
interface Props {
    user_id: string,
    id: string,
    title: string,
    body: string
}
export default function Home() {
    const { data, isLoading, error } = useQuery('getDataKey', fetchData) // getData is (unique key that need to provided to each key)
    return (
        <>
            {console.log(data)}
            <div className='container'>
                {/* {data ? data.map((data: Props) =>
                    <div className="card" key={data.id}>
                        <div className="card-header">
                            <div> User Id : {data.user_id} </div> <div>  Post Id : {data.id}  </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.body}</p>
                        </div>
                    </div>
                ) : "loading"} */}

                {isLoading ? "loading" :
                    data.map((data: Props) =>
                        <div className="card" key={data.id}>
                            <div className="card-header">
                                <div> User Id : {data.user_id} </div> <div>  Post Id : {data.id}  </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.body}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}
