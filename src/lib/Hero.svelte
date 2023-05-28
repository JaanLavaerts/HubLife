<script>
    import { user } from "../store.js";

    let userValues = {};

    user.subscribe((value) => {
        userValues = value;
    });

</script>

<main>

    <span class="text-3xl text-neutral-content font-light">Hello, 
        <p class="text-5xl text-accent font-light">
            {#if userValues.name} 
                {userValues.name}
            {:else}
                Guest
            {/if}
        </p>
    </span>

    
</main>