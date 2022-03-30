import { c as create_ssr_component, a as each, e as escape } from "../../chunks/index-756e41cf.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pets = $$props.pets;
  return `<article><header><h1>Sanity + SvelteKit</h1></header>
  <main><h2>Pets</h2>
    ${pets && pets.length ? `<ul>${each(pets, (pet) => {
    return `<li>${escape(pet.title)}</li>`;
  })}</ul>` : `<p>No pets found.</p>`}
    <h2>Data</h2>
    ${pets && pets.length ? `<div><pre>${escape(JSON.stringify(pets, null, 2))}</pre></div>` : `<div>\xAF\\_(\u30C4)_/\xAF</div>
    <pre>
      Your data will show up here when you&#39;ve configured everything correctly
    </pre>`}</main>
</article>`;
});
export { Routes as default };
