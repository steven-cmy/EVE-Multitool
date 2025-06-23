<template>
  <template v-for="(part, index) in parsedContent" :key="index">
    <RouterLink
      v-if="part.type === 'router-link'"
      :to="{ name: 'types-showinfo', params: { typeid: part.type_id } }"
    >
      {{ part.content }}
    </RouterLink>
    <a
      v-else-if="part.type === 'external-link'"
      :href="part.href"
      v-bind="part.attrs"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ part.content }}
    </a>
    <span v-else-if="part.type === 'html'" v-html="part.content" />
    <span v-else>{{ part.content }}</span>
  </template>
</template>
<script setup lang="ts">
import { computed } from 'vue';
// import { RouterLink } from 'vue-router';

const props = defineProps({
  html: {
    type: String,
    // required: true,
  },
});

const processHtmlStyles = (html: string) => {
  return html
    .replace(/<b>/g, '<span style="font-weight:bold;">')
    .replace(/<\/b>/g, '</span>')
    .replace(/<i>/g, '<span style="font-style:italic;">')
    .replace(/<\/i>/g, '</span>')
    .replace(/<font size=\"(\d+)\">/g, (_, size) => `<span style="font-size:${size}px;">`)
    .replace(/<font color=\"([^\"]+)\">/g, (_, color) => `<span style="color:${color};">`)
    .replace(
      /<font size=\"(\d+)\" color=\"([^\"]+)\">/g,
      (_, size, color) => `<span style="font-size:${size}px; color:${color};">`,
    )
    .replace(
      /<font color=\"([^\"]+)\" size=\"(\d+)\">/g,
      (_, color, size) => `<span style="font-size:${size}px; color:${color};">`,
    )
    .replace(/<\/fontsize>/g, '</span>')
    .replace(/<\/font>/g, '</span>')
    .replace(/<color=(\w+)>/g, (_, color) => `<span style="color:${color};">`)
    .replace(/<\/color>/g, '</span>')
    .replace(/\n/g, '<br>');
};

const parsedContent = computed(() => {
  const parts = [];
  let currentIndex = 0;

  if (!props.html) return [];

  // First, process the HTML styles
  const processedHtml = processHtmlStyles(props.html);

  // Regex to find <a> tags
  const linkRegex = /<(?:a|url)\s*([^>]*?)(?:href)?="?([^>"]*)"?([^>]*?)>(.*?)<\/(?:a|url)>/gi;
  let match;

  while ((match = linkRegex.exec(processedHtml)) !== null) {
    // Add text/HTML before the link
    if (match.index > currentIndex) {
      const beforeText = processedHtml.slice(currentIndex, match.index);
      if (beforeText.trim()) {
        parts.push({
          type: 'html',
          content: beforeText,
        });
      }
    }

    const [, beforeHref, href, afterHref, linkText] = match;
    const allAttrs = (beforeHref + afterHref).trim();

    // Parse attributes
    const attrs: Record<string, string> = {};
    const attrRegex = /(\w+)="([^"]*)"/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(allAttrs)) !== null) {
      if (attrMatch[1] !== 'href') {
        attrs[attrMatch[1]] = attrMatch[2];
      }
    }

    // Determine if it's an internal or external link
    if (href.startsWith('showinfo') && href.split(':')[1]) {
      parts.push({
        type: 'router-link',
        type_id: href.split(':')[1],
        content: linkText,
        attrs,
      });
    } else {
      parts.push({
        type: 'external-link',
        href,
        content: linkText,
        attrs,
      });
    }

    currentIndex = linkRegex.lastIndex;
  }

  // Add remaining text/HTML
  if (currentIndex < processedHtml.length) {
    const remainingText = processedHtml.slice(currentIndex);
    if (remainingText.trim()) {
      parts.push({
        type: 'html',
        content: remainingText,
      });
    }
  }

  return parts;
});
</script>
