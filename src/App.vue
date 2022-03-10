<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

let id = ref(1);

const date = ref(new Date());

interface OptionsType {
  [key: string]: () => string;
}

const options: OptionsType = {
  month: (): string =>
    new Intl.DateTimeFormat("en-US", { month: "long" })
      .format(date.value)
      .toString(),
  weekday: (): string =>
    new Intl.DateTimeFormat("en-US", { weekday: "long" })
      .format(date.value)
      .toString(),
};

const getTextFormat = (property: string): string => {
  return options[property]();
};

interface Todo {
  identifier: number;
  text: string;
  styles: { button: string; text: string };
}

const handleClick = ({ styles }: Todo): void => {
  styles.button =
    styles.button === "text-red-400" ? "text-green-400" : "text-red-400";
  styles.text = styles.text === "" ? "line-through" : "";
};

const todos = ref([
  {
    identifier: id.value++,
    text: "Learn React",
    styles: { button: "text-red-400", text: "" },
  },
  {
    identifier: id.value++,
    text: "Learn Tailwindcss",
    styles: { button: "text-red-400", text: "" },
  },
  {
    identifier: id.value++,
    text: "Learn AWS",
    styles: { button: "text-red-400", text: "" },
  },
  {
    identifier: id.value++,
    text: "Learn Git",
    styles: { button: "text-red-400", text: "" },
  },
  {
    identifier: id.value++,
    text: "Learn Docker",
    styles: { button: "text-red-400", text: "" },
  },
  {
    identifier: id.value++,
    text: "Learn Javascript",
    styles: { button: "text-red-400", text: "" },
  },
  {
    identifier: id.value++,
    text: "Learn ECMAScript 6",
    styles: { button: "text-red-400", text: "" },
  },
]);
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-slate-300">
    <div
      class="flex h-fit w-fit flex-col rounded-lg bg-white py-14 px-14 font-Poppins"
    >
      <div class="my-auto flex flex-row gap-32">
        <div class="flex flex-row gap-2">
          <h2 class="my-auto text-5xl font-bold">{{ date.getDate() }}</h2>
          <div class="flex flex-col">
            <h2 class="font-bold">{{ getTextFormat("month") }}</h2>
            <h2>{{ date.getFullYear() }}</h2>
          </div>
        </div>
        <h2 class="my-auto text-2xl">{{ getTextFormat("weekday") }}</h2>
      </div>
      <div v-for="todo in todos" :key="todo.identifier">
        <div class="relative mt-12 flex h-10 w-full flex-row">
          <h2 :class="`h-10 w-fit text-2xl ${todo.styles.text}`">
            {{ todo.text }}
          </h2>
          <button class="absolute right-0 my-auto" @click="handleClick(todo)">
            <CheckCircleIcon
              :class="`h-10 w-10 text-2xl ${todo.styles.button}`"
            ></CheckCircleIcon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
