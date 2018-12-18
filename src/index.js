import Vue from 'vue';
import quicklink from "quicklink/dist/quicklink";

Vue.directive('quicklink',{
    bind(el,binding,vnode){
        let props = binding.value
        quicklink({
            ...props,
            el
          });
    }
});
