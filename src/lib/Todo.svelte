<script>
    import Plus from "./icons/plus.svelte";
</script>


<main>
    <div class="flex w-full flex-row">
        <input type="text" placeholder="Todo" class="input input-sm input-bordered input-secondary w-full focus-visible:outline-0" />
        <button class="btn btn-square btn-outline btn-secondary btn-sm ml-2">
            <Plus />
        </button>
    </div>

</main>