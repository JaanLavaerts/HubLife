import { writable } from "svelte/store";

const userData = localStorage.getItem("user");
const todosData = localStorage.getItem("todos");

export const user = writable(userData ? JSON.parse(userData) : {});
export const todos = writable(todosData ? JSON.parse(todosData) : []);
