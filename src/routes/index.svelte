<article>
  <header>
    <h1>Sanity + SvelteKit</h1>
  </header>
  <main>
    <h2>Pets</h2>
    {#if pets}
    <ul>
      {#each pets as pet}
      <li>{pet.name}</li>
      {/each}
    </ul>
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
  var pets;
  var PROJECT_ID = 'p7p77fnd';
  let DATASET = 'production';
  
  let QUERY = encodeURIComponent('*[_type == "pet"]');
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
      
  fetch(URL)
    .then((response) => response.json())
    .then(({result}) => {
      console.log(JSON.stringify(result, null, 2));
    })
    .catch((error) => console.log(error));
</script>

