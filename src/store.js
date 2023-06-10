import { writable } from "svelte/store";

const userData = localStorage.getItem("user");
const todosData = localStorage.getItem("todos");
const settingsData = localStorage.getItem("settings");

export const user = writable(userData ? JSON.parse(userData) : {});
export const todos = writable(todosData ? JSON.parse(todosData) : []);
export const settings = writable(settingsData ? JSON.parse(settingsData) : {});
