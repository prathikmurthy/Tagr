import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { CircularProgress } from "@mui/material";

// axios
const axios = require('axios');

export default function Admin() {
    // const [data, setData] = useState<any>([]);
    // useEffect(() => {
    //     axios.get('/api/PullAllUntagged').then((res: any) => {
    //         setData(res.data);
    //     })
    // }
    // , [])

    // useEffect(() => {
    //     console.log(data)
    // }
    // , [data])
    
    const [loading, setLoading] = useState(true);
    const {data, error} = useSWR('/api/PullAllUntagged', axios.get);
    
    useEffect(() => {
        if (data) {
            setLoading(false)
            console.log(data)
        }
    }
    , [data])

    function DataButton({url, id}: {url: string, id: number}) {
        function deleteEntry() {
            setLoading(true);
            axios.post('/api/DeleteUntagged', {id: id}).then((res: any) => {
                // console.log(res)
                mutate('/api/PullAllUntagged', axios.get('/api/PullAllUntagged'), false).then((res: any) => {
                    setLoading(false)
                })
            }).catch((err: any) => {
                console.log(err)
            }
            )
        }
    
        return (
            <div className="bg-black/50 text-white grid grid-cols-3 max-w-2xl mx-auto mt-2 mb-2">
                <p className="pl-12 col-span-2 mt-2 mb-2">{url}</p>
                <button className="bg-red-500 p-2 float-right" onClick={deleteEntry}>X</button>
            </div>
        )
    }
    

    // console.log(data)
    return (
        <div className="min-h-screen min-w-screen">
            <div className="mt-12 mb-12">
            {
                loading ? <CircularProgress /> :
                data.data.map((item: any, index: number) => {
                    return (
                        <DataButton key={index} url={item.url} id={item.id} />
                    )
                })
            }
            </div>
        </div>
    );
}



