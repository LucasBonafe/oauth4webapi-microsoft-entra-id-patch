import { test, red, modules } from '../runner.js'

for (const module of modules('ensure-jarm-without-exp-fails')) {
  test.serial(red(), module, 'JWT "exp" (expiration time) claim missing')
}
