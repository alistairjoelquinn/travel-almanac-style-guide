import { AiFillFormatPainter as icon } from 'react-icons/ai';

export default {
  name: 'quick-formatting',
  title: 'Quick Formatting',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is the item?',
    },
    {
      name: 'value',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Each input should be a separate example clarifying why the item is included.',
    },
  ],
};
