import {useState, useEffect} from "react";

const useGetUsers = (url) => {
    const [item, setItem] = useState([])

    useEffect(() => {
            fetch(url)
                .then((response) => {
                    if (response.status === 404) {
                        return 404
                    } else {
                        return response.json()
                    }
                })
                .then((json) => setItem(json));
    }, [url])

    return item;
}

export default useGetUsers;