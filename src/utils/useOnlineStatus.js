import { useState, useEffect } from "react";

const useOnlineStatus = (resId) => {
    const[onlineStatus, setOnlineStatus] = useState(true); // true means user is online.

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, [])

    // boolean value
    console.log("onlineStatus: ", onlineStatus);

    return onlineStatus;
}

export default useOnlineStatus;
