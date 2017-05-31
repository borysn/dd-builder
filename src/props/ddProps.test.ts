import { ddProps } from './ddProps'
import { expect } from 'chai'

// test parse build command
describe('parse build command', () => {
  it('should return \'build\'', () => {
    const result = ddProps.getInstance().getPropValue('ddBuilder.cmds.build.name')
    expect(result).to.equal('build')
  })
})

// test parse help command
describe('parse help command', () => {
  it('should return \'help\'', () => {
    const result = ddProps.getInstance().getPropValue('ddBuilder.cmds.help.name')
    expect(result).to.equal('help')
  })
})
