<script context="module">
    export async function load({fetch}) {
        const res = await fetch('http://localhost:1337/api/scholarships?_limit=100')
        const scholarships = await res.json()
        

        if (res.ok) {
            return {
                props: {
                    scholarships: scholarships.data
                }
            }
        }
        return {
            status: res.status, 
            error: new Error('Could not fetch the scholarships')
        }
    }
    
</script>

<script>
import { set_attributes } from "svelte/internal"
    let searchTerm = ""
    let filteredScholarships = []
    $: {
        console.log(searchTerm)
        if(searchTerm) {
            filteredScholarships = scholarships.filter(scholarship => scholarship.attributes.description.toLowerCase().includes(searchTerm.toLowerCase())
            
            );
            
        } else {
            filteredScholarships = [...scholarships]
        }
    }

    export let scholarships
    console.log(scholarships)
</script>

<div class="scholarships">
    <input class="justify-center w-full rounded-md text-lg p-6 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search Scholarships">
    <ul>
        {#each filteredScholarships as scholarship}
            <li>
                <h2>{scholarship.attributes.name}</h2>
                <p>{scholarship.attributes.description}</p>
                <h4>{scholarship.attributes.criteria}</h4>
                <h5>{scholarship.attributes.link}</h5>
            </li>
        {/each}
    </ul>
</div>