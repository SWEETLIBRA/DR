<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div>{{ title }}</div>
      <div :class="$style.content">
        <!-- <AddPaymentForm
          v-if="settings.content === 'addPaymentForm'"
          @add-payment="addPayment"
          :categoryList="categoryList"
        />
        <Auth
          v-if="settings.content === 'auth'"
        /> -->
        <component :is="settings.content" />
      </div>
      <footer :class="$style.footer">
        <button @click="closeModal">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm'
import Auth from '@/components/Auth'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ModalWindowAddPayment',
  props: {
    settings: {
      type: Object
    }
  },
  components: { AddPaymentForm, Auth },
  computed: {
    ...mapGetters(['categoryList']),
    title () {
      return this.settings?.title || 'Modal window'
    }
  },
  methods: {
    ...mapActions(['addNewPayment']),
    addPayment (data) {
      this.$store.commit('ADD_PAYMENT_DATA', data)
    },
    closeModal () {
      this.$modal.hide()
    }
  }
}
</script>

<style module>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 8px;
  }
</style>
