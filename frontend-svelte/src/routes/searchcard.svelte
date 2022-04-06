<script context="module">
    export async function load({fetch}) {
        const res = await fetch('https://radiant-waters-36864.herokuapp.com/api/scholarships')
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
<div class="instructions">
    <h1>Start Searching!</h1>
    <p>You can either browse all the scholarships, or use keywords, such as the school, GPA required, Amount given, or required ethnicity for more specific results. Popular searches include: Native American - Hispanic - Women - Military - Undergraduate - Science</p>
</div>

<div class="scholarships">
    <input class="box" type="text" bind:value={searchTerm} placeholder="Search Scholarships">
    <ul>
        {#each filteredScholarships as scholarship}
            <li>
                <h2>{scholarship.attributes.name}</h2>
                <p>{scholarship.attributes.description}</p>
                <h5><a href={scholarship.attributes.link}>Visit Scholarship Website</a></h5>
            </li>
        {/each}
    </ul>
</div>

<style>
    .scholarships {
        text-align: center;
        
    }
    li {
        list-style-type: none;
        border: 8px solid #A48AA8;
        margin: auto;
        margin-bottom: 15px;
        line-height: 2.0;
        font-size: large;
    }
    .instructions {
        text-align: center;
        line-height: 2.0;
        font-size: x-large;
    }
    a:hover {
        color: #b24bf3;
    }
    .box {
        font-size: xx-large;
        margin-bottom: 50px;
    }
   
</style>