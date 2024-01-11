import { test, red, modules } from '../runner.js'

for (const module of modules('ensure-authorization-response-with-invalid-missing-state-fails')) {
  test.serial(red({ useState: true }), module, 'response parameter "state" missing')
}
