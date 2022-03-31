<template>
  <div class="page">
    <div class="q-my-md">
      <q-btn color="primary" label="添加用户" />
    </div>

    <q-table :rows="rows" :columns="columns" row-key="name" hide-pagination />
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'Index',
  setup() {
    const columns = [
      {
        field: 'id',
        label: 'ID',
        style: 'width: 50px'
      },
      {
        field: 'username',
        label: '用户名'
      },
      {
        field: 'nickname',
        label: '昵称'
      }
    ];

    const rows = [
      {
        id: 'U202203310001',
        username: 'helloworld',
        nickname: 'halo'
      }
    ];

    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 2,
      rowsPerPage: 3
    });

    return {
      columns,
      rows,
      pagination,
      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      )
    };
  }
};
</script>

<style scoped></style>
