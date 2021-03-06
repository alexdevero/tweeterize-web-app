export function tweeterize(txt: string, limit = 280) {
  const result = []
  let str = txt

  while (str.length > 0) {
    if (str.length > limit) {
      let deliminator = str.substring(0, limit).lastIndexOf(' ') > (str.substring(0, limit).lastIndexOf('.') + 1) ? str.substring(0, limit).lastIndexOf(' ') : (str.substring(0, limit).lastIndexOf('.') + 1)
      let chunk = str.substring(0, deliminator).trim()

      result.push(chunk)
      str = str.replace(chunk, '').trim()
    } else {
      result.push(str)
      str = ''
    }
  }

  return result
}

// tweeterize(
//   'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
// )
