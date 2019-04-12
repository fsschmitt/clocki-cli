import {expect, test} from '@oclif/test'

import {db} from '../../src/utils/db'

describe('report', () => {
  db.setState({})
  test.stdout().command(['in'])
  test
    .stdout()
    .command(['task', 'Test Report 1'])
    .it('add task 1', ctx => {
      expect(ctx.stdout).to.contain('Adding new task: Test Report 1')
    })
  test
    .stdout()
    .command(['task', 'Test Report 2'])
    .it('add task 2', ctx => {
      expect(ctx.stdout).to.contain('Adding new task: Test Report 2')
    })
  test
    .stdout()
    .command(['report'])
    .it('runs report to check existing tasks', ctx => {
      expect(ctx.stdout).to.contain('Test Report 1') &&
        expect(ctx.stdout).to.contain('Test Report 2')
    })
})
