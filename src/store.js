import { writable } from "svelte/store";

const userData = localStorage.getItem("user");

export const user = writable(userData ? JSON.parse(userData) : {});
