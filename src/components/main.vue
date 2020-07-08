<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 d-none d-md-block bg-light sidebar">
                <Nav v-bind:is-vertical="true" v-bind:items="navItems" />
            </div>
            <div class="col-md-10 ms-sm-auto main" ref="main">
                <List v-bind:items="items" v-bind:view-type="view" />
            </div>
        </div>
    </div>
</template>

<script src="./main.ts"></script>