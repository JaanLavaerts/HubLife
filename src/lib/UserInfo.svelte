<script>
    import { user } from '../store.js';
    import { onMount } from 'svelte';

    let name = '';
    let place = '';
    let triviaCategory = '';
    let showModal = false;
    let userValues = {};
    let categories = [
        {id: 0, name: 'Any Category'},
        { id: 9, name: 'General Knowledge' },
        { id: 10, name: 'Entertainment: Books' },
        { id: 11, name: 'Entertainment: Film' },
        { id: 12, name: 'Entertainment: Music' },
        { id: 13, name: 'Entertainment: Musicals & Theatres' },
        { id: 14, name: 'Entertainment: Television' },
        { id: 15, name: 'Entertainment: Video Games' },
        { id: 16, name: 'Entertainment: Board Games' },
        { id: 17, name: 'Science & Nature' },
        { id: 18, name: 'Science: Computers' },
        { id: 19, name: 'Science: Mathematics' },
        { id: 20, name: 'Mythology' },
        { id: 21, name: 'Sports' },
        { id: 22, name: 'Geography' },
        { id: 23, name: 'History' },
        { id: 24, name: 'Politics' },
        { id: 25, name: 'Art' },
        { id: 26, name: 'Celebrities' },
        { id: 27, name: 'Animals' },
        { id: 28, name: 'Vehicles' },
        { id: 29, name: 'Entertainment: Comics' },
        { id: 30, name: 'Science: Gadgets' },
        { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
        { id: 32, name: 'Entertainment: Cartoon & Animations' },
        { id: 9, name: 'General Knowledge' },
        { id: 10, name: 'Entertainment: Books' },
        { id: 11, name: 'Entertainment: Film' },
        { id: 12, name: 'Entertainment: Music' },
        { id: 13, name: 'Entertainment: Musicals & Theatres' },
        { id: 14, name: 'Entertainment: Television' },
        { id: 15, name: 'Entertainment: Video Games' },
        { id: 16, name: 'Entertainment: Board Games' },
        { id: 17, name: 'Science & Nature' },
        { id: 18, name: 'Science: Computers' },
        { id: 19, name: 'Science: Mathematics' },
        { id: 20, name: 'Mythology' },
        { id: 21, name: 'Sports' },
        { id: 22, name: 'Geography' },
        { id: 23, name: 'History' },
        { id: 24, name: 'Politics' },
        { id: 25, name: 'Art' },
        { id: 26, name: 'Celebrities' },
        { id: 27, name: 'Animals' },
        { id: 28, name: 'Vehicles' },
        { id: 29, name: 'Entertainment: Comics' },
        { id: 30, name: 'Science: Gadgets' },
        { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
        { id: 32, name: 'Entertainment: Cartoon & Animations' }
    ];

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
    <!-- <button class="btn btn-primary" on:click={() => localStorage.removeItem('user')}>Reset</button> -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" bind:checked={showModal} />

    <div class="modal">
        <div class="modal-box relative">
            <button class="btn btn-sm btn-circle absolute right-2 top-2" on:click={toggleModal}>✕</button>
            <div class="form-control text-center">
                <h3 class="font-bold text-2xl">Welcome to 
                    <span class="text-primary">HubLife</span>.
                </h3>
                <p class="py-3">Start by filling in your name, city and favorite trivia category.</p>
                <form on:submit|preventDefault={handleSubmit}>
                    <input class="input input-bordered my-2" type="text" bind:value={name} placeholder="Name" />
                    <input class="input input-bordered my-2" type="text" bind:value={place} placeholder="City" />
                    <select class="select select-bordered w-full max-w-xs" bind:value={triviaCategory}>
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
