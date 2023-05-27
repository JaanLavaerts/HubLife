<script lang="js">
  import Hero from "./lib/Hero.svelte";
  import UserInfo from "./lib/UserInfo.svelte";
  import Weather from "./lib/Weather.svelte";
  import Timer from "./lib/Timer.svelte";
</script>

<main>
  <div class="container max-w-5xl mx-auto p-3">
    <UserInfo />
    <div class="flex flex-col w-full lg:flex-row">
      <div class="grid flex-grow h-48 card bg-base-300 rounded-box">
        <div class="flex flex-row justify-around items-center m-5">
          <Hero />
          <div class="divider divider-horizontal"></div>
          <Timer format={12} showSeconds={true} />
        </div>
      </div>
      <div class="divider lg:divider-horizontal"></div>
      <div class="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center"></div>
    </div>
    <br>
    <div class="flex flex-col w-full">
      <div class="grid h-64 card bg-base-300 rounded-box place-items-center">
        <Weather />
      </div>
      <div class="divider"></div>
      <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
        news?
      </div>
    </div>
  </div>
</main>
