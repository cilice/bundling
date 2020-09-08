import { defineComponent, ref } from '@vue/composition-api';
import { n as normalizeComponent } from './index-4c103b10.js';

var script = defineComponent({
    props: {
        number: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const count = ref(props.number);
        function increase() {
            count.value = count.value + 1;
        }
        return { count, increase };
    }
});

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      on: {
        click: function($event) {
          return _vm.increase()
        }
      }
    },
    [_vm._v("Button")]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

export default __vue_component__;
//# sourceMappingURL=Button-ef19915b.js.map
