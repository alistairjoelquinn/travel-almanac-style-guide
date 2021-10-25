import { IoCalendarNumberOutline as icon } from 'react-icons/io';

export default {
    name: 'dates-numbers',
    title: 'Dates & Numbers',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What is the item?'
        },
        {
            name: 'value',
            title: 'Description',
            type: 'array',
            of: [
                { type: 'string' }
            ],
            description: 'Each input should be a separate example clarifying why the item is included.'
        },
    ]
};