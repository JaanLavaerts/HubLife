<script>
    import { user } from '../store.js';
    import { onMount } from 'svelte';

    let name = '';
    let place = '';
    let showModal = false;
    let userValues = {};

    user.subscribe((value) => {
        userValues = value;
    });

    const toggleModal = () => {
        showModal = !showModal;
    }

    const handleSubmit = () => {
        localStorage.setItem('user', JSON.stringify({ name, place }));
        user.set({ name, place });
        showModal = false;
    }

    onMount(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser === null) {
            showModal = true;
        }
    });

</script>

<main>
    <!-- <button class="btn btn-primary" on:click={() => localStorage.removeItem('user')}>Reset</button> -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" bind:checked={showModal} />

    <div class="modal">
        <div class="modal-box relative">
            <button class="btn btn-sm btn-circle absolute right-2 top-2" on:click={toggleModal}>✕</button>
            <div class="form-control text-center">
                <h3 class="font-bold text-2xl">Welcome to 
                    <span class="text-primary">HubLife</span>.
                </h3>
                <p class="py-3">Start by filling in your name and city below.</p>
                <form on:submit|preventDefault={handleSubmit}>
                    <input class="input input-bordered m-2" type="text" bind:value={name} placeholder="Name" />
                    <input class="input input-bordered" type="text" bind:value={place} placeholder="City" />
                    <button class="modal-action mx-auto" type="submit">
                        <label for="my-modal-3" class="btn btn-secondary">Start using HubLife!</label>
                    </button>
                </form>
            </div>
        </div>
    </div>
</main>
