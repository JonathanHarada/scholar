<!-- src/components/Auth.svelte -->

<script lang="ts">
    import Error from "./ErrorAlert.svelte";
    import { fade } from "svelte/transition";
    import { getContext } from "svelte";
    import axios from "axios";
    

    type AuthMode = "login" | "register";

    export let authMode: AuthMode = "register";
    export let next: string = "/profile";
    const apiUrl: string = getContext("apiUrl");

    let loginError: string | null = null;
    let registerError: string | null = null;

    let email = "";
    let password = "";
    let cpassword = "";
    let username = "";

    function login() {
        email = email.trim();
        password = password.trim();

        if (!email || !password) {
            loginError = "Fill out all fields!";
            return;
        }
        loginError = null;

        axios
            .post("http://localhost:1337/api/auth/local", {
                identifier: email,
                password,
            })
            .then(({ data }) => {
                localStorage.setItem("JWT", data.jwt);
                localStorage.setItem("user", JSON.stringify(data.user));
                // Using window.location.href instead of router.redirect to refresh the page
                // so that components like Navbar update too
                window.location.href = next;
            })
            .catch((err) => {
                if (err.response) {
                    loginError = "";
                    for (let message of err.response.data.message[0].messages) {
                        loginError += `${message.message}\n`;
                    }
                } else loginError = err;
            });
    }

    function register() {
        email = email.trim();
        password = password.trim();
        cpassword = cpassword.trim();
        username = username.trim();

        if (!email || !password || !cpassword || !username) {
            registerError = "Fill out all fields!";
            return;
        }

        if (password !== cpassword) {
            registerError = "Passwords don't match";
            return;
        }
        registerError = null;

        axios
            .post("http://localhost:1337/api/auth/local/register", {
                
                username,
                email,
                password,
            })
            .then(({ data }) => {
                localStorage.setItem("JWT", data.jwt);
                localStorage.setItem("user", JSON.stringify(data.user));
                // Using window.location.href instead of router.redirect to refresh the page
                // so that components like Navbar update too
                window.location.href = next;
            })
            .catch((err) => {
                if (err.response) {
                    registerError = "";
                    for (let message of err.response.data.message[0].messages) {
                        registerError += `${message.message}\n`;
                    }
                } else registerError = err;
            });
    }
</script>



<div class="w3-container">
    <div class="w3-card-4 w3-border w3-border-black auth-box">
        <div>
            <button
                style="width: 50%"
                on:click={() => (authMode = 'login')}
                class="w3-bar-item w3-button w3-{authMode === 'login' ? 'blue' : 'white'} w3-hover-{authMode === 'login' ? 'blue' : 'light-gray'}">Login</button>
            <button
                style="width: 50%"
                on:click={() => (authMode = 'register')}
                class="w3-bar-item w3-button w3-{authMode === 'register' ? 'blue' : 'white'} w3-hover-{authMode === 'register' ? 'blue' : 'light-gray'}">Register</button>
        </div>
        <div class="w3-container">
            <h3>{authMode === 'login' ? 'Login' : 'Register'}</h3>

            {#if authMode === 'login'}
                <form on:submit|preventDefault={login} in:fade>
                    {#if loginError}
                        <Error message={loginError} />
                    {/if}
                    <div>
                        <label for="email"></label>
                        <input
                            type="email"
                            bind:value={email}
                            placeholder="Enter your email"
                            id="email"/>
                    </div>
                    <div>
                        <label for="password"></label>
                        <input
                            type="password"
                            bind:value={password}
                            placeholder="Enter your password"
                            id="password"/>
                    </div>
                    <div>
                        <button class="push">Login</button>
                        <button class="push" on:click={() => (authMode = 'register')}>Register</button>
                    </div>
                </form>
            {:else}
                <form on:submit|preventDefault={register} in:fade>
                    {#if registerError}
                        <Error message={registerError} />
                    {/if}
                    <div>
                        <label for="username"></label>
                        <input
                            type="text"
                            bind:value={username}
                            placeholder="Enter a username"
                            id="username"/>
                    </div>
                    <div>
                        <label for="email"></label>
                        <input
                            type="email"
                            bind:value={email}
                            placeholder="Enter your email"
                            id="email"/>
                    </div>
                    <div>
                        <label for="password"></label>
                        <input
                            type="password"
                            bind:value={password}
                            placeholder="Enter a password"
                            id="password"/>
                    </div>
                    <div>
                        <label for="cpassword"></label>
                        <input
                            type="password"
                            bind:value={cpassword}
                            placeholder="Re-enter that password"
                            id="cpassword"/>
                    </div>
                    <div class="w3-section">
                        <button class="push">Register</button>
                        <button class="push" on:click={() => (authMode = 'login')}>Login</button>
                    </div>
                </form>
            {/if}
        </div>
    </div>
</div>

<style>

    input {
        padding: 10px;
    }
    .auth-box {
        width: 40%;
        margin: 1rem auto;
        text-align: center;
    }

    @media (max-width: 600px) {
        .auth-box {
            width: 80%;
            
        }
    }
    .push {
        margin-bottom: 60px;
    }
</style>