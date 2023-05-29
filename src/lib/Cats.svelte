<script>
    import { onMount } from "svelte";
    import Spinner from "./icons/spinner.svelte";
    import Lightbulb from "./icons/lightbulb.svelte";
    
    let urlImg = 'https://api.thecatapi.com/v1/images/search';
    let img;

    const fetchData = async () => {
        const resImg = await fetch(urlImg);
        const dataImg = await resImg.json();
        img = dataImg[0].url
    };
    
    onMount(fetchData);

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        fetchData();
        }
    };
        
</script>
    
    
<main>
    {#if img}
    <div on:click={fetchData} on:keydown={handleKeyDown} class="card h-48 bg-inherit">
        <figure><img class="img" src={img} alt="cat" /></figure>
    </div>
    {:else}
        <Spinner />
    {/if}
</main>

<style>
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        cursor: pointer;
    }
</style>