<template>
  <div v-html="parsedContent" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  html: {
    type: String,
  },
});


const parsedContent = computed<string | undefined>(() => {
  if (!props.html) return undefined;
  const parser: DOMParser = new DOMParser();
  const dom: Document = parser.parseFromString(
    props.html
      .replace(/\r?\n/gi, '<br>')
      .replace(/<url=([^>]+)>([^<]*)<\/url>/gi, (_, url, text) => `<a href="${url}">${text}</a>`),
    'text/html',
  );
  const elements = dom.querySelector('body')?.children;
  if (elements) {
    const tagMappings: Record<string, string> = {
      b: 'span',
      i: 'span',
      font: 'span',
      a: 'a',
    };

    const processElement = (element: Element) => {
      // Process children first (depth-first)
      Array.from(element.children).forEach((child) => {
        processElement(child);
      });

      // Then process current element
      const oldTag = element.tagName.toLowerCase();
      if (tagMappings[oldTag]) {
        const newElement = dom.createElement(tagMappings[oldTag]);
        // Copy all attributes
        Array.from(element.attributes).forEach((attr) => {
          if (attr.name === 'href') {
            if (attr.value.startsWith('showinfo')) {
              newElement.setAttribute(
                attr.name,
                router.resolve(
                  { name: 'types-showinfo', params: { typeid: attr.value.split(':')[1] } },
                  router.currentRoute.value,
                ).fullPath,
              );
            } else {
              newElement.setAttribute(attr.name, attr.value);
              newElement.setAttribute('target', '_blank');
              newElement.setAttribute('rel', 'noopener noreferrer');
            }
          } else if (attr.name === 'size') {
            newElement.style.setProperty('font-size', `${attr.value}px`);
          } else if (attr.name === 'color') {
            newElement.style.setProperty('color', attr.value);
          } else {
            newElement.setAttribute(attr.name, attr.value);
          }
        });

        if (oldTag === 'b') {
          newElement.style.setProperty('font-weight', 'bold');
        }
        if (oldTag === 'i') {
          newElement.style.setProperty('font-style', 'italic');
        }
        // Copy inner content
        newElement.innerHTML = element.innerHTML;
        element.replaceWith(newElement);
      }
    };

    // Process all top-level elements
    Array.from(elements).forEach((element) => {
      processElement(element);
    });
  }
  return dom.querySelector('body')?.innerHTML;
});
</script>
