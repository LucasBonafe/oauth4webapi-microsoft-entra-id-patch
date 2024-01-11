import { test, red, modules } from '../runner.js'

for (const module of modules('ensure-jarm-without-aud-fails')) {
  test.serial(red(), module, 'JWT "aud" (audience) claim missing')
}
