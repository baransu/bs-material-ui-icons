const icons = require('@material-ui/icons');
const fs = require('fs');
const os = require('os');

const contents = Object.keys(icons)
  .map(
    icon => `module ${icon} = {
  [@react.component] [@bs.module "@material-ui/icons/${icon}"]
  external make : unit => React.element = "default";
};`,
  )
  .join(`${os.EOL}${os.EOL}`);

fs.writeFileSync('./src/MaterialUIIcons.re', contents);
