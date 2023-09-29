import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Detail = () => {
    const {persID} = useParams();
    const [user,setUser] = useState(null);
    useEffect(()=>{
        const getData = async () =>{
            const params = new URLSearchParams();
            params.append('persID',persID);
            const {data} = await axios.post(`http://192.168.100.21:64195/Test/getPersLINESECTION/`,params);
            setUser(data);
            console.log(data);
        }
        getData();
    },[persID])
    return (
        <>
        <div>Kullanıcının Bölümü : {user?.LINENAME} Kullanıcının Bandı: {user?.SECTIONNAME}</div>
        </>
    )
}

export default Detail