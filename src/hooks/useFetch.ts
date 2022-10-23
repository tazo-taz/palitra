import { useState, useCallback, useEffect } from 'react';
import axios from "axios"

export default function useFetch(url: string) {
    const [state, setState] = useState<any>();
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true)
        const response = await axios.get(url)
        setState(response.data)
        setLoading(false)
    }, [url])


    useEffect(() => {
        fetchData()

        return () => {
            console.log("remove");

        }
    }, [fetchData])

    return { data: state, loading, fetchData } as const
}