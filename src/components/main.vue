<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 d-none d-md-block bg-light sidebar" ref="sidebar">
            </div>
            <div class="col-md-10 ms-sm-auto main" ref="main">
                <div>{{ view }}</div>
            </div>
        </div>
    </div>
</template>

<script src="./main.ts"></script>