<template>
  <div id="app">
    <h1>Messages</h1>
    <div class="inputs">
      <div class="input-group">
        <label>Message Text</label>
        <input type="text" v-model="text">
      </div>
      <div class="input-group">
        <label>Message Type</label>
        <select v-model="type">
          <option value="">Default</option>
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>
      <div class="input-group">
        <label>Dismissible?</label>
        <span>
          <input type="radio" name="gender" :value="true" v-model="dismiss"> Yes
          <input type="radio" name="gender" :value="false" v-model="dismiss"> No
        </span>
      </div>
      <button @click="sendMsg">Send Message</button>
    </div>
    <messages></messages>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import messages from './components/messages/messages'
export default {
  name: 'app',
  data () {
    return {
      text: '',
      type: '',
      dismiss: false
    }
  },
  methods: {
    ...mapActions({
      'genericMessage': 'messages/genericMessage',
      'genericDismissMessage': 'messages/genericDismissMessage',
      'infoMessage': 'messages/infoMessage',
      'infoDismissMessage': 'messages/infoDismissMessage',
      'successMessage': 'messages/successMessage',
      'successDismissMessage': 'messages/successDismissMessage',
      'errorMessage': 'messages/errorMessage',
      'errorDismissMessage': 'messages/errorDismissMessage',
      'warningMessage': 'messages/warningMessage',
      'warningDismissMessage': 'messages/warningDismissMessage'
    }),
    sendMsg: function () {
      var t = this;

      if(t.dismiss == false) {
        if(t.type == 'success') {
          t.successMessage(t.text)
        } else if(t.type == 'error') {
          t.errorMessage(t.text)
        } else if(t.type == 'info') {
          t.infoMessage(t.text)
        } else if(t.type == 'warning') {
          t.warningMessage(t.text)
        } else {
          t.genericMessage(t.text);
        }
      } else {
        if(t.type == 'success') {
          t.successDismissMessage(t.text)
        } else if(t.type == 'error') {
          t.errorDismissMessage(t.text)
        } else if(t.type == 'info') {
          t.infoDismissMessage(t.text)
        } else if(t.type == 'warning') {
          t.warningDismissMessage(t.text)
        } else {
          t.genericDismissMessage(t.text);
        }
      }
    }
  },
  components: {
    messages
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    width: 190px;
    margin: 1.25em 0;
  }
  label {
    padding-bottom: .25em;
  }
  button {
    cursor: pointer;
    transition: all 0.2s ease-out;
    margin: 1em auto 0;
    padding: 1em;
    background-color: white;
    color: steelblue;
    box-shadow: none;
    border: 1px solid steelblue;
    border-radius: 2px;
  }
  button:hover {
    color: white;
    background-color: steelblue !important;
  }
</style>
