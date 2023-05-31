<script>
    import { settings } from "../store";
    import { user } from "../store";
    import { categories } from "../assets/categories.js";

    let settingsData = {};
    let userData = {};
    const getSettings = () => JSON.parse(localStorage.getItem("settings"));
    const getUserData = () => JSON.parse(localStorage.getItem("user"));
    let { ustimeformat: USTimeFormat, showseconds: showSeconds } = getSettings() || {};
    let { name, place, triviaCategory } = getUserData() || {};


    if (localStorage.getItem("settings")) {
        settings.set(getSettings());
    }
    if (localStorage.getItem("user")) {
        userData = getUserData();
    }

    settings.subscribe(value => {
        settingsData = value;
    });

    user.subscribe(value => {
        userData = value;
    });
    
    const toggleSetting = (event, settingName) => {
        const value = !settingsData[settingName];
        setTimeout(() => event.target.checked = value, 0);
        settings.update(data => {
            data[settingName] = value;
            return data;
        });
        localStorage.setItem("settings", JSON.stringify(settingsData));
    };

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify({ name, place, triviaCategory }));
        user.set({ name, place, triviaCategory });
    };

</script>

<main>
    <!-- theme, different components, change name/location/, general info/guides... -->
    <h2 class="text-3xl font-bold text-primary">Settings</h2>
    <p class="text-base-content font-thin">Personalize your <span class="text-primary font-bold">HubLife</span> experience.</p>

    <br>
    <h3 class="text-xl font-bold text-secondary">General</h3>
    <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">12h time format</span>
          <input type="checkbox" class="toggle toggle-secondary" bind:checked={USTimeFormat} on:click|preventDefault={() => toggleSetting(event, 'ustimeformat')} />
        </label>
    </div>
    <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Show seconds</span> 
          <input type="checkbox" class="toggle toggle-secondary" bind:checked={showSeconds} on:click|preventDefault={() => toggleSetting(event, 'showseconds')} />
        </label>
    </div>

    <br>
    <h3 class="text-xl font-bold text-secondary">Components</h3>
    <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Bored</span>
          <input type="checkbox" class="checkbox checkbox-secondary" />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Jokes</span>
          <input type="checkbox" class="checkbox checkbox-secondary" />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Facts</span>
          <input type="checkbox" class="checkbox checkbox-secondary" />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Trvia</span>
          <input type="checkbox" class="checkbox checkbox-secondary" />
        </label>
      </div>
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Cats</span>
          <input type="checkbox" class="checkbox checkbox-secondary" />
        </label>
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

    <footer class="fixed bottom-0 w-full p-2 text-base-content text-sm font-thin">
        <a class="underline" href="https://www.linkedin.com/in/jaan-lavaerts/" target="_blank">Jaan Lavaerts</a> - HubLife :)
    </footer>
</main>
