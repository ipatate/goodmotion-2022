import millisecondsToReadable from '../helpers/milisecondsToReadable'

describe('millisaconds to readable content', () => {
  it('2 minutes', () => {
    expect(millisecondsToReadable(120000).minutes).toBe('2')
  })
  it('0 to seconds', () => {
    expect(millisecondsToReadable(122020).seconds).toBe('02')
  })
  it('5 minutes 25 seconds', () => {
    const t = millisecondsToReadable(324960)
    expect(t.minutes).toBe('5')
    expect(t.seconds).toBe('25')
  })
})
