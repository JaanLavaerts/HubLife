<script lang="js">
  import Hero from "./lib/Hero.svelte";
  import UserInfo from "./lib/UserInfo.svelte";
  import Weather from "./lib/Weather.svelte";
  import Timer from "./lib/Timer.svelte";
  import Bored from "./lib/Bored.svelte";
  import Joke from "./lib/Joke.svelte";
  import Fact from "./lib/Fact.svelte";
  import Trivia from "./lib/Trivia.svelte";
  import Cats from "./lib/Cats.svelte";
  import Todo from "./lib/Todo.svelte";
  import Settings from "./lib/Settings.svelte";
  import SettingsIco from "./lib/icons/settingsIco.svelte";
  import { settings } from "./store";
  import { onMount, afterUpdate } from "svelte";
  import MediaQuery from "./lib/util/MediaQuery.svelte";


  let settingsData = {};
  let components = [];

  settings.subscribe(value => {
    settingsData = value;
  });

  onMount(() => {
    if (localStorage.getItem("settings") !== null) {
      settings.set(JSON.parse(localStorage.getItem("settings")));
    }
  });

  afterUpdate(() => {
    components = [
      { component: Bored, show: settingsData.bored },
      { component: Joke, show: settingsData.jokes },
      { component: Fact, show: settingsData.facts },
      { component: Trivia, show: settingsData.trivia },
      { component: Cats, show: settingsData.cats },
    ];
  });
</script>

<main>
  <div class="drawer">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle btn btn-secondary" />
    
    <div class="drawer-content">
      <label for="my-drawer-4" class="drawer-button m-2 btn"><SettingsIco /></label>

      <div class="container max-w-6xl mx-auto p-3">
        <UserInfo />
        <div class="flex flex-col w-full lg:flex-row">

          <div class="grid flex-grow card bg-base-300 rounded-box">
            <MediaQuery query="(min-width: 840px)" let:matches>
              {#if matches}
                <div class="h-48 card bg-base-300 rounded-box">
                  <div class="flex justify-around items-center m-10">
                    <Hero mobile={false}/>
                    <div class="divider divider-horizontal"></div>
                    <Timer USformat={settingsData.ustimeformat} showSeconds={settingsData.showseconds} />
                  </div>
                </div>
              {:else}
                <div class="h-34 pt-3 card bg-base-300 rounded-box place-items-center">
                  <Hero mobile={true}/>
                </div>
                <div class="divider sm:divider-horizontal"></div>
                <div class="h-34 pb-5 card bg-base-300 rounded-box place-items-center">
                  <Timer USformat={settingsData.ustimeformat} showSeconds={settingsData.showseconds} />
                </div>
              {/if}
            </MediaQuery>
          </div>

          <div class="divider lg:divider-horizontal"></div>
          <div class="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
            <Weather useFarenheit={settingsData.usefarenheit} />
          </div>
        </div>

        <br>

        <div class="grid h-64 card bg-base-300 rounded-box py-4 px-5 overflow-y-auto">
          <Todo />
        </div> 

        <br>

        <div class="flex flex-col w-full lg:flex-row">
          {#each components.filter(component => component.show) as { component }, index}
            <div class="grid flex-grow h-48 lg:w-48 card bg-base-300 rounded-box place-items-center">
              {#if component}
                <svelte:component this={component} />
              {/if}
            </div>
            {#if index !== components.filter(component => component.show).length - 1}
              <div class="divider lg:divider-horizontal"></div>
            {/if}
          {/each}
        </div>

      </div>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <Settings />
      </ul>
    </div>
  </div>
</main>

<style>

</style>

