<article>
  <header>
    <h1>Sanity + SvelteKit</h1>
  </header>
  <main>
    <h2>Pets</h2>
    {#if pets && pets.length}
    <ul>
      {#each pets as pet}
      <li>{pet.title}</li>
      {/each}
    </ul>
    {:else}
    <p>No pets found.</p>
    {/if}
    <h2>Data</h2>
    {#if pets && pets.length}
    <div>
      <pre>{JSON.stringify(pets, null, 2)}</pre>
    </div>
    {:else}
    <div>¯\_(ツ)_/¯</div>
    <pre>
      Your data will show up here when you've configured everything correctly
    </pre>
    {/if}
  </main>
</article>

<script>
  let pets = $$props.pets;
</script>

