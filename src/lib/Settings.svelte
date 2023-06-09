<script>
  import { settings } from "../store";
  import { user } from "../store";
  import { categories } from "../assets/categories.js";

  let settingsData = { usefarenheit: false, ustimeformat: false, showseconds: true, bored: true, jokes: false, facts: true, trivia: true, cats: false };
  let userData = {};
  let currentTheme;
  const getUserData = () => JSON.parse(localStorage.getItem("user"));
  let { name, place, triviaCategory } = getUserData() || {};

  if (!localStorage.getItem("settings")) {
    settings.set(settingsData);
    localStorage.setItem("settings", JSON.stringify(settingsData));
  } else {
    settingsData = JSON.parse(localStorage.getItem("settings"));
  }
  if (localStorage.getItem("theme")) {
    currentTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", currentTheme);
  }
  if (localStorage.getItem("user")) userData = getUserData();

  settings.subscribe(value => { settingsData = value; });
  user.subscribe(value => { userData = value; });

  const toggleSetting = (event, settingName) => {
    const value = !settingsData[settingName];
    const selectedCategories = Object.keys(settingsData).filter(key => settingsData[key] && key !== "ustimeformat" && key !== "showseconds" && key !== "usefarenheit");
    if (value && selectedCategories.length >= 3 && settingName !== "ustimeformat" && settingName !== "showseconds" && settingName !== "usefarenheit") {
      setTimeout(() => (event.target.checked = false), 0);
      return;
    }
    setTimeout(() => (event.target.checked = value), 0);
    settings.update(data => { data[settingName] = value; return data; });
    localStorage.setItem("settings", JSON.stringify(settingsData));
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify({ name, place, triviaCategory }));
    user.set({ name, place, triviaCategory });
  };

  const themeChange = (event) => {
    const theme = event.target.value;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

</script>

<main>
  <h2 class="text-3xl font-bold text-secondary">Settings</h2>
  <p class="text-base-content font-thin">Personalize your <span class="text-primary font-bold">HubLife</span> experience.</p>

  <br>
  <h3 class="text-xl font-bold text-secondary">Theme</h3>
  <div class="form-control flex flex-col">
      <select class="select select-bordered w-full max-w-xs mt-2" on:change|preventDefault={themeChange}>
        <option selected={currentTheme === "dark"} value="dark">Dark</option>
        <option selected={currentTheme === "light"} value="light">Light</option>
        <option selected={currentTheme === "dracula"} value="dracula">Dracula</option>
        <option selected={currentTheme === "night"} value="night">Night</option>
        <option selected={currentTheme === "yellow"} value="yellow">Yellow</option>
        <option selected={currentTheme === "forest"} value="forest">Forest</option>
        <option selected={currentTheme === "halloween"} value="halloween">Halloween</option>
      </select>
  </div>

  <br>
  <h3 class="text-xl font-bold text-secondary">General</h3>
  <div class="form-control">
    {#each [['12h time format', 'ustimeformat'], ['Show seconds', 'showseconds'], ['Use farenheit', 'usefarenheit']] as item}
      <label class="cursor-pointer label">
        <span class="label-text">{item[0]}</span>
        <input type="checkbox" class="toggle toggle-secondary" bind:checked={settingsData[item[1]]} on:click|preventDefault={() => toggleSetting(event, item[1])} />
      </label>
    {/each}
  </div>  

  <br>

  <h3 class="text-xl font-bold text-secondary">Fun Stuff <span class="text-base-content font-thin text-sm">(max. 3)</span></h3>
  <div class="form-control">
    {#each ['Bored', 'Jokes', 'Facts', 'Trivia', 'Cats'] as item}
      <label class="cursor-pointer label">
        <span class="label-text">{item}</span>
        <input type="checkbox" class="checkbox checkbox-secondary" bind:checked={settingsData[item.toLowerCase()]} on:click|preventDefault={() => toggleSetting(event, item.toLowerCase())} />
      </label>
    {/each}
  </div>

  <br>
  <h3 class="text-xl font-bold text-secondary">You</h3>
  <form on:submit|preventDefault={handleSubmit}>
    <input class="input input-bordered w-full max-w-xs mt-2" type="text" bind:value={name} placeholder="Name" />
    <input class="input input-bordered w-full max-w-xs mt-2" type="text" bind:value={place} placeholder="City" />
    <select class="select select-bordered w-full max-w-xs mt-2" bind:value={triviaCategory}>
      {#each categories as category}
        <option value={category.id}>{category.name}</option>
      {/each}
    </select>
    <button type="submit" class="btn btn-secondary btn-xs w-full max-w-xs mt-2">Save</button>
  </form>

  <footer class="p-2 text-base-content text-sm font-thin">
    &copy; <a class="underline" href="https://www.linkedin.com/in/jaan-lavaerts/" target="_blank">Jaan Lavaerts</a> - HubLife :)
  </footer>
</main>
