<template>
<div class="app" transition="app">
    <div class="hd">
        <h1 class="page_title">Carbon UI</h1>
        <p class="page_desc">基于Vue封装，参考设计CARBON UI</p>
    </div>
    <div class="bd">
        <grids>
            <grid>1</grid>
        </grids>
    </div>
</div>
</template>

<script>
import { Grids, Grid } from 'carbonui';
export default {
    data() {
        return {
            list: []
        }
    },

    components: {Grids, Grid}
}
</script>