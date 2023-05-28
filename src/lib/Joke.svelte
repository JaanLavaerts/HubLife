<script>
    import { onMount } from "svelte";
    import Refresh from "./icons/refresh.svelte";
    import Spinner from "./icons/spinner.svelte";
  
    let url = 'https://joke.deno.dev/'
  
    let setup;
    let punchline;
    let type;
  
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setup = data.setup;
      punchline = data.punchline;
      type = data.type;
    }
  
    onMount(fetchData);
  

  </script>
  
  <main>
    {#if setup}
        <div class="items-center text-center">
            <button class="text-secondary" on:click={fetchData}><Refresh /></button>
            <div class="card items-center text-center bg-inherit text-neutral-content cursor-pointer mx-3 p-2">
            <label class="swap swap-flip text-xl font-medium">
                <input type="checkbox" />
                <div class="swap-off">{setup}</div>
                <div class="swap-on">{punchline}</div>
            </label>
            </div>
        </div>
    {:else}
        <Spinner />
    {/if}
  </main>
  