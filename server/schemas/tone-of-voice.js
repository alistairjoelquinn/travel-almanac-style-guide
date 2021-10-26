import { FcVoicePresentation as icon } from 'react-icons/fc';

export default {
    name: 'tone-of-voice',
    title: 'Tone Of Voice',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What is the section?'
        },
        {
            name: 'value',
            title: 'Description',
            type: 'text',
            description: 'This HTML will be shown exactly on screen! Be sure to always use the correct tags. If you are unsure then check the following resource https://developer.mozilla.org/en-US/docs/Web/HTML/Element'
        },
    ]
};