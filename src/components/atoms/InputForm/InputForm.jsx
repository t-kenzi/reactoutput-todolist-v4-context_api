import styles from "./style.module.css"
import React from "react";

export const InputForm = ({
    inputValue,
    placeholder,
    handleChangeValue,
    handleKeyDown,
}) => (
    <input
    className={styles.input}
    type="text"
    placeholder={placeholder}
    value={inputValue}
    onChange={handleChangeValue}
    onKeyDown={handleKeyDown}
    />
);