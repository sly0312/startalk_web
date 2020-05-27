const dotenv = require('dotenv')
const glob = require('glob')

dotenv.config()

const { NODE_ENV } = process.env
<<<<<<< HEAD
=======

>>>>>>> 4b0357a817414106c0828c5311b1ed59f745dc9c
if (!NODE_ENV) {
  console.log([
    '[error]: The .env file is not found. ',
    'Please run the following command to create the file in the root of the project:',
    'echo NODE_ENV=development > .env'
  ].join('\n'));
  process.exit(1);
}

const envs = glob.sync(`${__dirname}/profiles/${NODE_ENV}/**/*.env`)
<<<<<<< HEAD
=======

>>>>>>> 4b0357a817414106c0828c5311b1ed59f745dc9c
envs.forEach(env => {
  dotenv.config({ path: env })
  console.log(`[dotenv]\`${env}\` loaded.`)
})



