import { tweeterize } from './tweeterize'

it('Tweeterize text: keep together', () => {
  expect(tweeterize('Foo bar bazz')).toEqual(['Foo bar bazz'])
})

it('Tweeterize text: split to two', () => {
  expect(tweeterize('Note that the development build is not optimized.', 40)).toEqual(['Note that the development build is not', 'optimized.'])
})
