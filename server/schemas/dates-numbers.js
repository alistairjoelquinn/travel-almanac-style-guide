import { ImListNumbered as icon } from 'react-icons/im';

export default {
  name: 'dates-numbers',
  title: 'Dates, Time & Numbers',
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
