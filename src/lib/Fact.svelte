<script>
    import { onMount } from "svelte";
    import Spinner from "./icons/spinner.svelte";
    import Lightbulb from "./icons/lightbulb.svelte";
    
    let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
    let fact;

    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.text.length > 100) {
        fetchData();
        return;
      }
      
      fact = data.text;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };
    
    onMount(fetchData);
        
</script>
    
    
<main>
    {#if fact}
        <div class="card bg-inherit text-neutral-content cursor-pointer" on:click={fetchData} on:keydown={handleKeyDown}>
            <div class="card-body items-center text-center">
                <Lightbulb />
                <h2 class="card-title text-lg">{fact}</h2>
            </div>
        </div>
    {:else}
        <Spinner />
    {/if}
</main>
