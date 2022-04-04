<!-- src/routes/logout.svelte -->

<script lang="ts">
    import { onMount } from "svelte";
    import { clearToken } from "../auth";
    export const next: string = "/";
    // export let queryString: { next: string };
    const queryString = window.location.search;
    

    onMount(() => {
        clearToken();

        // Using window.location.href instead of router.redirect to refresh the page
        // so that components like Navbar update too
        window.location.href = queryString || "/";
    });
</script>

<h1 class="w3-center w3-xxlarge">Logging you out...</h1>
