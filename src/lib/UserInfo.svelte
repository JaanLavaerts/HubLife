<script>
    import { user } from '../store.js';
    import { onMount } from 'svelte';
    import { categories } from '../assets/categories.js'

    let name = '';
    let place = '';
    let triviaCategory = '';
    let showModal = false;
    let userValues = {};

    user.subscribe((value) => {
        userValues = value;
    });

    const toggleModal = () => {
        showModal = !showModal;
    }

    const handleSubmit = () => {
        localStorage.setItem('user', JSON.stringify({ name, place, triviaCategory }));
        user.set({ name, place, triviaCategory });
        showModal = false;
        location.reload();
    }

    onMount(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser === null) {
            showModal = true;
        }
    });

</script>

<main>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" bind:checked={showModal} />

    <div class="modal backdrop-blur" id="modal-3">
        <div class="modal-box relative">
            <button class="btn btn-sm btn-circle absolute right-2 top-2" on:click={toggleModal}>✕</button>
            <div class="form-control text-center">
                <h3 class="font-bold text-2xl">Welcome to 
                    <span class="text-primary">HubLife</span>.
                </h3>
                <p class="py-3">Start by filling in your name, city and favorite trivia category.</p>
                <form on:submit|preventDefault={handleSubmit}>
                    <input class="input input-bordered md:my-2" type="text" bind:value={name} placeholder="Name" />
                    <input class="input input-bordered my-2" type="text" bind:value={place} placeholder="City" />
                    <select class="select select-bordered w-full max-w-xs text-gray-400 font-normal text-base" bind:value={triviaCategory}>
                        <option value="" disabled selected>Trivia Category</option>
                        {#each categories as category}
                            <option value={category.id}>{category.name}</option>
                        {/each}
                    </select>
                    <button class="modal-action mx-auto" type="submit">
                        <label for="my-modal-3" class="btn btn-secondary">Start using HubLife!</label>
                    </button>
                </form>
            </div>
        </div>
    </div>
</main>
