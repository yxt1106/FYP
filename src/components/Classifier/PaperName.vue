<script setup>
import { ref } from 'vue';
import { Select, Checkbox, CheckboxGroup, SelectOption, Modal, Image } from 'ant-design-vue';
import { PageHeader } from 'ant-design-vue';
import { useDataStore } from '../../apis/dataStore.js';

const dataStore = useDataStore();
// console.log(dataStore);
// import { fetchData, getFetchedData } from '../../apis/api.js';
// import {fetchSheetData} from '../../apis/api.js'
// const API_KEY = 'AIzaSyB4yGLvW_GSWgdaX-7FPmFjmRkoZ1q62EU'; // 替换为你的Google API密钥
// const SPREADSHEET_ID = '18FtQvb2S6VbbYPyVnkjpoIGaxIzA5dEPk02WYFebSCQ/edit?gid=0#gid=0';
// const NameOfSheet = async function fetchSheetNames() {
//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?key=${API_KEY}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       const errorDetails = await response.json();
//       throw new Error(`HTTP错误！状态：${response.status}, 信息：${errorDetails.error.message}`);
//     }
//     const data = await response.json();
//     if (data.error) {
//       throw new Error(`API错误！信息：${data.error.message}`);
//     }
//     return data.sheets.map(sheet => sheet.properties.title);
//   } catch (error) {
//     console.error('获取表格名称时出错：', error);
//   }
// }
// fetchSheetData(NameOfSheet).then(data => console.log(data));
// fetchData().then(() => {
//   const data = getFetchedData(); // 获取存储的数据
//   console.log(data);
// });
fetchData().then(() => {
  const data = getFetchedData(); // 获取存储的数据
  console.log(data);
});
console.log();
const All = ref('All');
const paperNameData = ref([{
    value: 'jack',
    label: 'Jack123',
  },
  {
    value: 'lucy',
    label: 'Lucy123',
  }])
const handleChangePaperNameData = value => console.log(value);

const options = ['Yes', 'No']
let bool = ref(false);
const state = ref({
  checkedList: [],
})
const handleCheckBox = (v) => {console.log(v,state)}
// console.log(Arr);
// const imageArr = 

// const image = ref([])
// const imageClass = document.querySelector('.image');
// for(let i = 0; i < 10; i++) {
//   let img = document.createElement('img');
//   img.src = `./images/qrcode.png`;
//   imageClass.appendChild(img);
// }
const open = ref(new Array(12).fill(false));
const showModal = (i) => {
  console.log(open);
  open.value[i - 1] = true;
};
</script>

<template>
  <div class="header">
    <PageHeader style="border: 1px solid rgb(235, 237, 240)" 
    title="Visualization in motion" sub-title="" :ghost=false />
  </div>
  <div class="container">
    <div class="content">
      <div class="read-the-docs">
        Paper Name: <Select style="width: 200px" 
                      v-model:value=All
                            :options=paperNameData 
                            @change = "handleChangePaperNameData">
        </Select>
      </div>
      <div class="viewing-angle-change">
        Viewing angle change:
          <CheckboxGroup v-model:value="state.checkedList" :options="options" @change="handleCheckBox" />
      </div>
      <div class="Figure">
        Figure Type(s): <Select style="width: 200px" value="All"></Select>
      </div>
      <div class="Movementstatus">
        Movement status: <Select style="width: 200px" value="All"></Select>
      </div>
    </div>
  </div>
  <div class="image">
    <ul>
      <li v-for="i of 12" :key="i">
        <Image src="src\assets\images\qrcode.jpg" @click="() => showModal(i)" :preview="{ visible: false }"></Image>
        <!-- <img src="../../assets/images/qrcode.jpg" onclick="showModal"/> -->
        <Modal v-model:open="open[i - 1]" title="Information" 
        mask="true" 
        :footer=null 
        :mask= false
        :maskStyle ="{display: 'none'}"
        :bodyStyle ="{margin: 0}">{{ i }}</Modal>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  margin-bottom: 100px;
  top: 0px;
  left: 0px;
  right: 0;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 1030
}

.container {

  /* float: left; */
  /* margin-top: 300px; */
  padding: 0;
  position: relative;
  left: 0px;
  top: 100px;
  /* margin-bottom: 200px; */
  .content {
    /* position: absolute; */
    margin-top: 0px;

    .read-the-docs {
      margin: 0 25px;
    }

    .viewing-angle-change {
      margin: 25px;
    }

    .Figure {
      margin: 25px;
    }

    .Movementstatus {
      margin: 25px;
    }
  }
}

.image {
  position: relative;
  margin-top: 150px;
  border-top: 1px solid rgb(205, 205, 205);
}
</style>
