import Accordion from "../Accordion/Accordion";
import styles from "./FAQ.module.css";
import React, {useState, useEffect} from "react";

export default function FAQ({fetchFaq}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFaq().then((response) => {
            // console.log(response.data.data);
            setData(response.data.data);
        })
    }, [fetchFaq])


    return (
        <div className={styles.wrapper}>
            <h1>FAQs</h1>
            <Accordion data={data} />
        </div>
    )
}