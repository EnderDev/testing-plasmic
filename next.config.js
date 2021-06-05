
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['pYaGXxMCT3128BtNSCv6bf'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  