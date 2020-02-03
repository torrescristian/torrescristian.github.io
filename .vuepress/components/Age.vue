<template>
  <span>{{ age }}</span>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Age',
  data() {
    return {
      age: 0,
    }
  },
  mounted() {
    const today = moment();
    const birthday = moment('22-12-1995', 'DD-MM-YYYY');
    this.age = today.diff(birthday, 'years');
  }
}
</script>