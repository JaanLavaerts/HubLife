import { writable } from "svelte/store";

const userData = localStorage.getItem("user");
const todosData = localStorage.getItem("todos");
const notesData = localStorage.getItem("notes");
const settingsData = localStorage.getItem("settings");

export const user = writable(userData ? JSON.parse(userData) : {});
export const todos = writable(todosData ? JSON.parse(todosData) : []);
export const notes = writable(notesData ? JSON.parse(notesData) : []);
export const settings = writable(settingsData ? JSON.parse(settingsData) : {});
