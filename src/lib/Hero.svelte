<script>
    import { user } from "../store.js";

    let userValues = {};
    export let mobile;

    user.subscribe((value) => {
        userValues = value;
    });

</script>

<main>

    <span class="text-3xl text-neutral-content font-light">Hello, 
        {#if !mobile}
            <p class="text-5xl text-accent font-light">
                {#if userValues.name} 
                    {userValues.name}
                {:else}
                    Guest
                {/if}
            </p>
        {:else}
            <span class="text-5xl text-accent font-light">
                {#if userValues.name} 
                    {userValues.name}
                {:else}
                    Guest
                {/if}
            </span>
        {/if}
    </span>

    
</main>