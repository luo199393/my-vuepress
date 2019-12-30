<template>
  <div class="draggable-vue">
    <draggable
      class="inline-block mr10"
      v-model="myArray"
      :options="options"
      @update="datadragEnd"
    >
      <transition-group name="list-complete">
        <div
          class="test-one pointer"
          v-for="(element, index) in myArray"
          :key="'a' + index"
        >
          <i class="item el-icon-rank"></i> {{ element.name }}
        </div>
      </transition-group>
    </draggable>
    <draggable
      class="inline-block"
      v-model="myArray2"
      :options="options"
      @update="datadragEnd"
    >
      <transition-group name="list-complete">
        <div
          class="test-one pointer"
          v-for="(element, index) in myArray2"
          :key="'b' + index"
        >
          <i class="item el-icon-rank"></i> {{ element.name }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "draggableVue",
  components: {
    draggable
  },
  data: function() {
    return {
      myArray: [
        {
          name: "test1",
          order: 1
        },
        {
          name: "test2",
          order: 2
        },
        {
          name: "test3",
          order: 3
        },
        {
          name: "test4",
          order: 4
        }
      ],
      myArray2: [
        {
          name: "test11",
          order: 11
        },
        {
          name: "test12",
          order: 12
        },
        {
          name: "test13",
          order: 13
        }
      ],
      options: {
        animation: 300,
        group: "description", // 是否可跨数组拖拽
        ghostClass: "ghost",
        chosenClass: "choose", // 被拖动选择器
        // handle: ".item" // 可拖动选择器，若无，则全部可拖
      }
    };
  },
  methods: {
    datadragEnd: function(evt) {
      console.log("拖动前的索引：" + evt.oldIndex);
      console.log("拖动后的索引：" + evt.newIndex);
    }
  }
};
</script>

<style scoped>
.inline-block{
  display: inline-block;
  margin-right: 20px;
}
.choose {
  opacity: 0.3;
  background: #ccc;
}
.test-one {
  height: 30px;
  width: 100px;
  line-height: 30px;
  background: #f9f9f9;
  color: #4a4a4a;
  border: 1px solid #ccc;
}
</style>
