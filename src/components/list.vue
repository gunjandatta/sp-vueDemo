<template>
  <div v-if="items == null">
    <Spinner text="Loading the data..." />
  </div>
  <div v-else-if="items.length == 0">
    <Alert v-bind:type="viewType" content="No data exists..." />
  </div>
  <div v-else>
    <h1>View {{ viewType }}</h1>
    <Table v-bind:rows="items" v-bind:columns="table1Columns" v-if="viewType == 1" />
    <Table v-bind:rows="items" v-bind:columns="table2Columns" v-if="viewType == 2" />
  </div>
</template>

<script src="./list.ts"></script>