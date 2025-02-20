# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

输入 npm run dev以启动项目

1.查看node版本，指令：node -v

2.查看npm版本，指令：npm -v

3.安装vite，指令：npm init vite

问题：点开Image时，Modal窗口显示的内容总为v-for最后一个元素的内容
原因：1.所有 Modal 都绑定同一个 open 变量，无论点击哪个 Image，修改的都是同一个状态。
      2.事件处理函数中的 i 是循环结束后的终值（12），因为 Vue 的模板作用域不同于 JavaScript 块级作用域。
解决：给每个 Modal 绑定一个独立的 open 变量，通过 v-model 绑定。
Code：
<script setup>
    const open = ref(new Array(12).fill(false));
    //点开Image后逻辑相对应逻辑
    const showModal = (i) => {
    console.log(open);
    open.value[i - 1] = true;
    };
</script>
<li v-for="i of 12" :key="i">
        <Image src="src\assets\images\qrcode.jpg" @click="() => showModal(i)" :preview="{ visible: false }"></Image>
        <!-- <img src="../../assets/images/qrcode.jpg" onclick="showModal"/> -->
        <Modal v-model:open="open[i - 1]" title="Basic Modal" 
        mask="true" 
        :footer=null 
        :mask= false
        :maskStyle ="{display: 'none'}"
        :bodyStyle ="{margin: 0}">{{ i }}</Modal>
      </li>
