const padding = ['P-0', 'pr-md-1'];
const colMd = col => [`col-md-${col}`, ...padding];

export default {
  fields: [
    // Company
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'Company Name',
      label: 'Company',
      model: 'company',
      styleClasses: colMd(4),
    },
    // Position
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'JOb Title',
      label: 'Position',
      model: 'position',
      styleClasses: colMd(4),
    },
    // Website
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'https://company.com',
      label: 'Website',
      model: 'website',
      styleClasses: colMd(4),
    },
    // Start Date
    {
      type: 'input',
      inputType: 'date',
      format: 'YYYY-MM-DD HH:mm:ss',
      label: 'Start Date',
      model: 'startDate',
      styleClasses: colMd(6),
    },
    // End Date
    {
      type: 'input',
      inputType: 'date',
      format: 'YYYY-MM-DD HH:mm:ss',
      label: 'End Date',
      model: 'endDate',
      styleClasses: ['col-md-6', 'p-0'],
    },
    // Summary
    {
      type: 'textArea',
      inputType: 'text',
      label: 'Summary',
      placeholder: 'What was this job about?',
      model: 'summary',
    },
  ],
};
