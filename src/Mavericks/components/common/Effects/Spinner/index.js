import React from 'react';
import { motion } from 'framer-motion';
import { FaCircleNotch as Circle } from "react-icons/fa";
import Styles from './spinner.module.css';

function Spinner(props) {
    return (
        <div className={Styles.spinner} >
            <motion.div className={Styles.wrapper}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 0.8, repeat: Infinity }} >
                <Circle className={Styles.icon} />
            </motion.div>
        </div>
    );
}


export default Spinner;