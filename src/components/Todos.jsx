import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import TodoGrid from "./TodoGrid";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function Todos (){

    //states
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '',date: '',priority:''});


    // functions
    const handleInputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const handleDateChanged = (newDate) => {
        const formattedDate = dayjs(newDate).format('DD-MM-YYYY');
        setTodo({ ...todo, date: formattedDate });
    }

    const addTodo = () => {
        if (!todo.description.trim()) {
            // Show alert if description is empty
            alert("Input description");
            return;
        }
        setTodos([...todos, todo]);
        setTodo({ description: '',date: '',priority:''});
    }

    const deleteByIndex = (index) => {
        setTodos(todos.filter((todo, i) => i != index));
  }

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
               {<h3>Todo</h3>}
                <TextField
                    label="Description"
                    name="description"
                    value={todo.description}
                    onChange={handleInputChanged}
                />

                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DatePicker 
                   onChange={handleDateChanged}/>
                </LocalizationProvider>

                <TextField
                    label="Priority"
                    name="priority"
                    value={todo.priority}
                    onChange={handleInputChanged}
                />

                <Button variant="contained" onClick={addTodo}>
                    Add
                </Button>
            </Stack>
            {<TodoGrid
                todos={todos}
                deleteByIndex={deleteByIndex}
            />}
        </>
    );
}