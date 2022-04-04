<script lang="ts">
    // import { slide } from "svelte/transition";
    import { getToken } from "../auth";

    const auth = !!getToken();
    let active = false;
</script>

<div>
    <div>
        {#if auth}
            <a href="/">Home</a> 
            <a href="/searchcard">Scholarships</a>
            <a  href="/contactForm">ContactUs</a>
            <a  href="/resources">Resources</a>
            <a  href="/logout">Logout</a>
                 
        {:else}
            <a href="/">Home</a>
            <a  href="/searchcard">Start Searching</a>
            <a  href="/contactForm">Contact Us</a>
            <a  href="/resources">Resources</a>
            <a  href="/login">Login/Register</a>
        {/if}
    </div>
</div>


 <style>
    div {
         text-align: center;
     }
    a {
        margin: 8px;
        color: blue;
        
        
    }
    a:hover {
        color: #b24bf3;
    }
 </style>
