<script context="module">
    export async function load({fetch}) {
        const res = await fetch('https://radiant-waters-36864.herokuapp.com')
        const categories = await res.json()
        

        if (res.ok) {
            return {
                props: {
                    categories: categories.data
                }
            }
        }
        return {
            status: res.status, 
            error: new Error('Could not fetch the categories')
        }
    }
    
</script>

<script>
import { set_attributes } from "svelte/internal"

    export let categories
    console.log(categories)
</script>

<div class="categories">
    <ul>
        {#each categories as category}
            <li>
                <h2>{category.attributes.name}</h2>
                <p>{category.attributes.category.scholarship}</p>
            </li>
        {/each}
    </ul>
</div>