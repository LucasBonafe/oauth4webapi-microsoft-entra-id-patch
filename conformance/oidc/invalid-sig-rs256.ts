import { test, skippable, modules } from '../runner.js'

for (const module of modules('invalid-sig-rs256')) {
  test.serial(skippable(), module)
}
