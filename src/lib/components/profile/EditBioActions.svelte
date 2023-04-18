<script>
    export let editState, editStateHandler, saveProfileData
</script>

<div id="buttons" class="self-end">
    {#if editState}
        <button class="btn btn-warning w-fit" on:click={editStateHandler}>Cancel</button>
        <button class="btn w-fit btn-success" on:click={saveProfileData}>Save</button>
    {:else}
        <button class="btn btn-primary w-fit" on:click={editStateHandler}>Edit</button>
    {/if}
</div>