var console = require('console')

module.exports.function = function displayProfile (self) {
  console.log(self)
  if (self) 
    return 'lable = ' + self.addressInfos[0].label + ' address = ' + self.addressInfos[0].address.unstructuredAddress;
  else 
    return 'Not self';
}
