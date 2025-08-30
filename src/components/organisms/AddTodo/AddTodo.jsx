import { InputForm } from "../../atoms";
import styles from "./style.module.css";
import React from "react";

export const AddTodo = ({ addInputValue, onChangeTodo, handleAddTodo }) => {
    return(
        <>
        <h2 className={styles.subTitle}>{"ADD TODO"}</h2>
        <InputForm
            inputValue={addInputValue}
            placeholder={"New Todo"}
            handleChangeValue={onChangeTodo}
            handleKeyDown={handleAddTodo}
            />
        </>
    );
};