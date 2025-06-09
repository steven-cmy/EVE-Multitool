import type { Router } from 'vue-router';

export function processEVEMarkup(markup: string, router: Router): string {
  if (!markup) return '';
  return markup
    .replace(/href=showinfo:(\d+)/gi, (_, typeId) => {
      const path = router.resolve({
        name: 'types-showinfo',
        params: { typeid: typeId },
      }).href;
      return `href="${path}"`;
    })
    .replace(/<b>/g, '<span style="font-weight:bold;">')
    .replace(/<\/b>/g, '</span>')
    .replace(/<i>/g, '<span style="font-style:italic;">')
    .replace(/<\/i>/g, '</span>')
    .replace(/<font size=\"(\d+)\">/g, (_, size) => `<span style="font-size:${size}px;">`)
    .replace(/<font color=\"([^\"]+)\">/g, (_, color) => `<span style="color:${color};">`)
    .replace(/<\/fontsize>/g, '</span>')
    .replace(/<\/font>/g, '</span>')
    .replace(/<color=(\w+)>/g, (_, color) => `<span style="color:${color};">`)
    .replace(/<\/color>/g, '</span>')
    .replace(/\n/g, '<br>');
}
