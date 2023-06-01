<script>
    import Plus from "./icons/plus.svelte";
    import { todos } from "../store.js";
    import Trash_2 from "./icons/trash-2.svelte";

    let todoList = [];
    let todoText;

    $: todos.subscribe((value) => {
        todoList = value;
    });

    const addTodo = () => {
        todos.update((value) => {
            return [...value, { name: todoText, completed: false }];
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
        todoText = "";
    }

    const removeTodo = () => {
        todos.update((value) => {
            return value.slice(0, value.length - 1);
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
    }

    const completeTodo = (todo) => {
        todos.update((value) => {
            return value.map((t) => {
                if (t === todo) {
                    return { ...t, completed: !t.completed };
                }
                return t;
            });
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
}

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            completeTodo();
        }
    }

</script>


<main>
    <form on:submit|preventDefault={addTodo} class="flex w-full flex-row mb-4">
        <input required type="text" placeholder="Task" class="input input-sm input-bordered input-secondary w-full focus-visible:outline-0" bind:value={todoText} />
        <button class="btn btn-square btn-outline btn-secondary btn-sm ml-2">
            <Plus />
        </button>
    </form>

    {#each todoList as todo}
        {#if todo.completed}
            <div on:click={() => completeTodo(todo)} on:keydown={handleKeyDown} class="cursor-pointer flex flex-row bg-base-200 mb-2 p-2 items-center justify-between rounded-lg line-through hover:bg-base-100">
                <div class="text-base-content text-sm font-sm">
                    <span class="text-neutral-content">
                        {todo.name}
                    </span>
                </div>
                <button type="submit" class="btn btn-square btn-xs ml-2" on:click={removeTodo}>
                <Trash_2 />
                </button>
            </div>
        {:else}
            <div on:click={() => completeTodo(todo)} on:keydown={handleKeyDown} class="cursor-pointer flex flex-row bg-base-100 mb-2 p-2 items-center justify-between rounded-lg hover:bg-base-200">
                <div class="text-base-content text-sm font-sm">
                    <span class="text-neutral-content">
                        {todo.name}
                    </span>
                </div>
                <button type="submit" class="btn btn-square btn-xs ml-2" on:click={removeTodo}>
                <Trash_2 />
                </button>
            </div>
        {/if}
    {/each}

    

  

</main>