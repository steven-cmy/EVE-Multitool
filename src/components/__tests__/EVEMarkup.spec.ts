import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import EVEMarkup from '../EVEMarkup.vue';

describe('EVEMarkup', () => {
  it('renders simple text without links', () => {
    const wrapper = mount(EVEMarkup, {
      props: {
        html: 'This is a simple text with no markup.',
      },
    });
    expect(wrapper.html()).toContain('<span>This is a simple text with no markup.</span>');
  });

  it('handles empty input', () => {
    const wrapper = mount(EVEMarkup, {
      props: {
        html: '',
      },
    });
    expect(wrapper.html()).toBe('');
  });
});
