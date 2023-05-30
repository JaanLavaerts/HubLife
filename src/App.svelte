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
</script>

<main>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle btn btn-secondary" />
    
    <div class="drawer-content">
      <label for="my-drawer-4" class="drawer-button btn m-4 float-right"><SettingsIco /></label>

      <div class="container max-w-6xl mx-auto p-3 lg:mt-20">
        <UserInfo />
        <div class="flex flex-col w-full lg:flex-row">
          <div class="grid flex-grow h-48 card bg-base-300 rounded-box">
            <div class="flex justify-around items-center m-10">
              <Hero />
              <div class="divider divider-horizontal"></div>
              <Timer format={24} showSeconds={true} />
            </div>
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
            <Weather />
          </div>
        </div>

        <br>

        <div class="grid h-64 card bg-base-300 rounded-box py-4 px-5 overflow-y-auto">
          <Todo />
        </div> 

        <br>

        <div class="flex flex-col w-full lg:flex-row">
          <div class="grid flex-grow h-48 lg:w-48 card bg-base-300 rounded-box items-center justify-center">
            <Bored />
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="grid flex-grow h-48 lg:w-48 card bg-base-300 rounded-box place-items-center">
            <Joke />
          </div>

          <div class="divider lg:divider-horizontal"></div>
          <div class="grid flex-grow h-48 lg:w-48 card bg-base-300 rounded-box place-items-center">
            <Fact />
            <!-- <Trivia /> -->
            <!-- <Cats /> -->
          </div>
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
