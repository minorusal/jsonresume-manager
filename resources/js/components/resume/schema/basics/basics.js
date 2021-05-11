const padding = ['P-0', 'pr-md-1'];
const colMd = col => [`col-md-${col}`, ...padding];

export default {
  fields: [
    // Picture
    {
      type: 'resume-picture',
      label: 'Resume Profile Image',
      model: 'Picture',
    },
    // Name
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'Your name',
      label: 'Name',
      model: 'name',
      styleClasses: colMd(4),
    },
    // Label
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'Programmer',
      label: 'Label',
      model: 'label',
      styleClasses: colMd(4),
    },
    // Email
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'uourname@email.com',
      label: 'Email',
      model: 'email',
      validatos: 'email',
      styleClasses: colMd(4),
    },
    // Phone
    {
      type: 'input',
      inputType: 'tel',
      placeholder: '9876543210',
      label: 'Phone',
      model: 'phone',
      styleClasses: colMd(6),
    },
    // Website
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'http://yourbewsite.com',
      label: 'Website',
      model: 'website',
      validatos: 'url',
      styleClasses: colMd(6),
    },
    // Summary
    {
      type: 'textArea',
      inputType: 'text',
      placeholder: 'a little bit abut yourself',
      label: 'Summary',
      model: 'summary',
    },
  ],
};
