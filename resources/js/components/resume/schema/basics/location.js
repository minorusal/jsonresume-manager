const padding = ['P-0', 'pr-md-1'];
const colMd = col => [`col-md-${col}`, ...padding];

export default {
  fields: [
    // Address
    {
      type: 'input',
      inputType: 'text',
      placeholder: '2712 Broadway ST',
      label: 'address',
      model: 'address',
      styleClasses: colMd(4),
    },
    // Postal Code
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'CA 94115',
      label: 'Postal Code',
      model: 'postalCode',
      styleClasses: colMd(4),
    },
    // City
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'San Francisco',
      label: 'City',
      model: 'city',
      styleClasses: colMd(4),
    },
    // Country Code
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'US',
      label: 'Country Code',
      model: 'countryCode',
      styleClasses: colMd(4),
    },
    // Region
    {
      type: 'input',
      inputType: 'text',
      placeholder: 'California',
      label: 'Region',
      model: 'region',
      styleClasses: colMd(4),
    },
  ],
};
