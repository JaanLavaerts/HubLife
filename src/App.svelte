<script lang="js">
  import Hero from "./lib/Hero.svelte";
  import UserInfo from "./lib/UserInfo.svelte";
  import Weather from "./lib/Weather.svelte";
  import Timer from "./lib/Timer.svelte";
  import Bored from "./lib/Bored.svelte";
  import Joke from "./lib/Joke.svelte";
  import Fact from "./lib/Fact.svelte";
  import Trivia from "./lib/Trivia.svelte";
</script>

<main>
  <div class="container max-w-6xl mx-auto p-3">
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

      <div class="flex flex-col w-full">
          <div class="grid h-64 card bg-base-300 rounded-box place-items-center">
          </div> 
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
            <!-- <Fact /> -->
            <Trivia />
          </div>
      </div>

  </div>
</main>
