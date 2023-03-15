import Vue from 'vue'
import { extend } from "vee-validate";
import { required, alpha, digits, email } from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver } from "vee-validate";

extend('email', {
  ...email,
  message: "I'll need a legit email to get in touch"
});
extend('required', required);

extend("req", {
  ...required,
  message: "This field is required"
})

extend("alpha", {
  ...alpha,
  message: "Laukam jāsastāv no alfabēta simboliem"
});





Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

