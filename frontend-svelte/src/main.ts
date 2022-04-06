// src/main.ts
import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        strapiApiUrl: 'https://radiant-waters-36864.herokuapp.com/api'
    }
});

export default app;
