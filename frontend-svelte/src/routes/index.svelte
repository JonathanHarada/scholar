<script lang="ts">
    import { onMount } from "svelte";
    import { getToken } from "../auth";
    import router from "page";

    export const queryString = {};
    export const params = {};

    onMount(() => {
        if (getToken()) router.redirect("/");
    });
</script>

<div class="hero">
    <h1 class="landing">Begin your journey to improve your education!</h1>
</div>

<h2>About Us</h2>
<div class="paragraph">
    <p>Here at NM Scholarship Finder, our goal is to create a central location where people in all stages of life can go to seek out scholarship information. Whether you're currently in college, about to graduate high school, or just looking to start a new career, we want an easy to search application where anyone can go and not feel overwhelmed while starting their journey.</p>
</div>
<h2>How to use</h2>
<div class="paragraph">
    <p>It's simple! Click on the Scholarships button, then type a keyword into the search box. That's it! You can now search for scholarships based on school, GPA, nationality, or even general. Make sure to create an account for updates on future features!</p>
</div>
<h2>Support Us</h2>
<div class="paragraph">
    <p>We currently have over 150 scholarships that apply to schools all over New Mexico! We have also added special programs offered through career one stops. However, to ensure the accuracy of each scholarship, the data is all seeded by hand. If you notice any scholarships that you feel should be added, please <a href="/contactForm">Contact Us</a>. Fill out the contact form with all of the available information and a link to verify, and the scholarship will get added. If you would like to be added as a moderator to help expand the number of scholarships listed, please reach out. We will be looking for volunteers willing to help.</p>
</div>
<h2>Donate</h2>
<div class="paragraph">
    <p class="bottom">This website is completely free, any donation helps with cost of hosting....
        <button><a href="https://www.paypal.com/donate/?hosted_button_id=N32XCFC7MVVJ8">Paypal</a></button>
    </p>
    
</div>

<style>
    h1,h2 {
        text-align: center;
    }

   .paragraph {
        border: 6px solid #A48AA8;
        margin: auto;
    }
    p {
        text-align: center;
        columns: 1;
        margin: 60px;
        line-height: 2.0;
        font-size: x-large;
    }
    button {
        height: 30px;
        width: 80px;
        background-color: blue;
        font-size: medium;
    }

    button a {
        color: white;
        text-decoration: none;
    }
    button:hover {
        background-color: black;
    }
    
</style>