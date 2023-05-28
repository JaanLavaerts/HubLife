<script>
    import { onMount } from "svelte";
    import Users from "./icons/users.svelte";
    import Tag from "./icons/tag.svelte";
    import PersonStanding from "./icons/person-standing.svelte";
    import Spinner from "./icons/spinner.svelte";
    
    let url = 'https://www.boredapi.com/api/activity'
    
    let activity;
    let type;
    let participants;
    let accessability;
    
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      activity = data.activity;
      type = data.type;
      participants = data.participants;
      accessability = data.accessibility * 100;
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    }
    
    onMount(fetchData)
        
</script>
    
    
<main>
    {#if activity}
        <div class="card bg-inherit text-neutral-content cursor-pointer" on:click={fetchData} on:keydown={handleKeyDown}>
            <div class="card-body items-center text-center">
            <h2 class="card-title">{activity}.</h2>
                <div class="flex flex-row">
                    <span class="flex flex-row text-md font-medium mr-2 px-2.5 py-0.5 rounded bg-neutral">
                        <Users />
                        {participants}
                    </span>
                    <span class="flex flex-row text-md font-medium mr-2 px-2.5 py-0.5 rounded bg-neutral">
                        <Tag />
                        {type}
                    </span>
                    <span class="flex flex-row text-md font-medium mr-2 px-2.5 py-0.5 rounded bg-neutral">
                        <PersonStanding />
                        {accessability}%
                    </span>
                </div>
            </div>
        </div>
    {:else}
        <Spinner />
    {/if}
</main>

    