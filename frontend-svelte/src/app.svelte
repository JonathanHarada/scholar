<!-- src/App.svelte -->

<script lang="ts">
    import { setContext } from "svelte";
    import router from "page";
    import { parse } from "qs";
    import Index from "./routes/index.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Auth from "./routes/auth.svelte";
    import Logout from "./routes/logout.svelte"
    import Profile from "./routes/profile.svelte"

    export let strapiApiUrl: string;

    let page;
    let params;
    let queryString;

    function setupRouteParams(ctx: PagJS.Context, next) {
        params = ctx.params;
        queryString = parse(ctx.querystring);
        next();
    }

    router("/", setupRouteParams, () => (page = Index));
    router("/auth", setupRouteParams, () => (page = Auth));
    router("/profile", setupRouteParams, () => (page = Profile));
    router("/logout", setupRouteParams, () => (page = Logout));
    router.start();

    setContext("apiUrl", strapiApiUrl);
</script>

<Navbar />

<!-- This component just renders the component `this`. It is used to render components dynamically, like how we're doing -->
<svelte:component this={page} {params} {queryString} />

