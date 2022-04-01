<template>
  <div class="page">
    <div class="q-my-md">
      <q-btn color="primary" label="添加用户" />
    </div>

    <q-table :rows="data" :columns="columns" row-key="name" hide-pagination />
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
import { search } from '../../api/user.js';

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

    const rows = [];

    const data = ref([]);

    const fetchData = () => {
      search({ page: 0 }).then(res => {
        // console.log(res.data);
        data.value = data.value.concat(res.data.content);
        pagination.value.page = res.data.number;
        pagination.value.rowsPerPage = res.data.size;
        pagination.value.rowsNumber = res.data.totalElements;
        // TODO: Rebuild
        // console.log(pagination.value);
      });
    };

    fetchData();

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
      ),
      data
    };
  }
};
</script>

<style scoped></style>
