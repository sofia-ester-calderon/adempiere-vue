import { convertPrivateAccess } from '@/utils/ADempiere/apiConverts/privateAccess'
import privateAccess from './objects/fromApi/privateAccess.json'
import convertedPrivateAccess from './objects/converted/privateAccess.json'

describe('privateAccess', () => {
  it('should return a converted privateAccess object', () => {
    const actualPrivateAccess = convertPrivateAccess(privateAccess)
    expect(actualPrivateAccess).toEqual(convertedPrivateAccess)
  })
})
