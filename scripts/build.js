let packager = require('electron-packager')
let path = require('path')

packager({
  dir: path.join(__dirname, '../'),
  // afterCopy: [ function () {
  //   console.log('afterCopy', ...arguments)
  // } ],
  // afterExtract: [ function () {
  //   console.log('afterExtract', ...arguments)
  // } ],

  // mac 
  'app-copyright': 'copyright 2017 Sunil Pai',
  'app-version': require('../package').version,
  asar: false,
  'build-version': require('../package').version,
  icon: path.join(__dirname, '../resources/', process.platform === 'darwin' ? 'ratpack-logo.icns': 'ratpack-logo.ico'),
  'out': path.join(__dirname, '../out'),
  overwrite: true,
  'app-bundle-id': 'com.threepointone.ratpack',
  'app-category-type': 'public.app-category.developer-tools',
  // 'extend-info': todo,
  'helper-bundle-id': 'com.threepointone.ratpack.helper',
  // protocol: 'ratpack'
  // 'protocol-name': []
  
  // windows
  win32metadata: {
    CompanyName: 'threepointone',
    FileDescription: 'ratpack, for justice',
    // OriginalFilename
    ProductName: 'ratpack'
    // InternalName: 
  }

   // nothing for linux? 
}, (err, appPaths) => {
  if(err) {
    console.error(err) //eslint-disable-line no-console
    return
  }
  console.log('done') //eslint-disable-line no-console
  console.log(appPaths) //eslint-disable-line no-console
})
