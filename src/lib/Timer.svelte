<script>
    import { onMount } from "svelte";
    
    export let USformat;
    export let showSeconds;

    let today = new Date();
    
    $: day = today.getDate().toString().padStart(2, '0');
    $: year = today.getFullYear().toString().padStart(2, '0');

    $: timeH = today.getHours().toString().padStart(2, '0');
    $: timeH12 = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    $: timeM = today.getMinutes().toString().padStart(2, '0');
    $: timeS = today.getSeconds().toString().padStart(2, '0');

    onMount(() => {
        const interval = setInterval(() => {
            today = new Date();
        }, 1000);
        return () => clearInterval(interval);
    });

    const getMonthName = (month) => {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
        return monthNames[month];
    }

</script>


<main>
    <span class="text-neutral-content font-thin">
      Today is <span class="text-secondary font-thin">{getMonthName(today.getMonth())} {day}, {year}</span>
    </span>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max mt-1">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            {#if USformat}
              <span style={`--value:${timeH12};`}></span>
            {:else}
              <span style={`--value:${timeH};`}></span>
            {/if}
        </span>
            {#if USformat}
                {today.getHours() >= 12 ? 'pm' : 'am'}
            {:else}
                hours
            {/if}
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style={`--value:${timeM};`}></span>
          </span>
          min
        </div> 
        {#if showSeconds}
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="countdown font-mono text-5xl">
              <span style={`--value:${timeS};`}></span>
            </span>
            sec
          </div>
        {/if}
    </div>

</main>

