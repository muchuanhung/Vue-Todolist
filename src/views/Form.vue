<template>
  <div id="app">
    <el-container class="form-container">
     
      <div class="form-container__nameinput">
        <div class="form-container__nameinput-01">
        <p>
        姓名
        </p>
        <el-input
         autofocus
         placeholder="请輸入名字..."
         v-model="input"
         @keyup.enter="addItem()"
        >
        </el-input>
        </div>
      
        <div class="form-container__nameinput-01">
        <p>
        年齡
        </p>
        <el-input
         type="text"
         placeholder="请輸入年齡..."
         v-model="newinput"
        >
        </el-input>
        </div>  
      </div>
      <div class="form-container__button">
       <el-button type="primary" class="form-container__button-01"  @click="addItem()">
         新增
       </el-button>
       <el-button  @click="cancelItem()"> 
         取消
       </el-button>
      </div>

      <div class="form-container__form">
        <el-table
        :data="tableData"
        v-if="editingItem !== item"
        @dblclick="editingItem = item; editingInput = item.content"
        style="width: 100%">
        <el-table-column
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="age"
        label="年齡"
        width="180">
        </el-table-column>
        <el-table-column
        prop="action"
        label="操作">
          <el-button type="primary" class="form-container__button-01"  @click="editingItem = item; editingInput = item.content">編輯</el-button>
          <el-button type="danger" class="form-container__button-01" @click="deleteItem(item)">刪除</el-button>
        </el-table-column>
        </el-table> 
      </div> 
      


    </el-container>
  </div>
</template>


<script>
    export default {
      data() {
        return {
          tableData: [
            {
            name: '王小虎',
            age: '18',
            action: '上海市普陀区金沙江路 1518 弄'
          }, 
            {
            name: '王小虎',
            age: '18',
            action: '上海市普陀区金沙江路 1518 弄'
          }, 
            {
            name: '王小虎',
            age: '18',
            action: '上海市普陀区金沙江路 1518 弄'
          }
          ],
          input: "",
          editingItem: {},
          editingInput: {},    
        }
      },
       methods: {
         addItem() {
            if (this.input.trim()) {
                this.list.push({
                    id: Math.floor(Date.now()),
                    content: this.input,
                    done: false,
                });
                this.input = '';
            }
         },
         deleteItem: function (target) {
            let list = this.list;
            list.forEach((item, index) => {
                if (item.name === target.name) {
                    list.splice(index, 1);
                    return;
                }
            });
         },
          editItem: function (target) {
            target.content = this.editingInput;
            this.editingItem = {};
        },

      }
    }
  </script>





  <style lang="scss">
    .form-container {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      width: 100%;
      &__nameinput{
    
    }
      &__nameinput-01{
    padding: 10px 0;
    }

    &__button{
    position: absolute;
    margin-top: 160px;
    }
    &__form{
    position: absolute;
    width: 80%;
    margin-top: 250px;
    }
}


  </style>

