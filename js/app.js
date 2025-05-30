const IMAGEN1 = document.getElementById('imgusuario')
const IMAGEN2 = document.getElementById('imgmaquina')
const MENSAJE = document.getElementById('mensaje')

function jugar() {
  let numeroRandom = Math.ceil(Math.random() * 3)
  console.log('numeroRandom', numeroRandom)
  let jugadaUsuario = parseInt(document.getElementById('jugadaUsuario').value)
  let jugadaMaquina = numeroRandom
  console.log('jugadaUsuario', jugadaUsuario)
  console.log('jugadaMaquina', jugadaMaquina)
  const arrayImagenes = ['none', 'piedra', 'papel', 'tijera']
  let piedra = 1
  let papel = 2
  let tijera = 3

  if (jugadaUsuario === jugadaMaquina) {
    MENSAJE.innerHTML = 'Empate'
  } else if (
    (jugadaUsuario === piedra && jugadaMaquina === tijera) ||
    (jugadaUsuario === papel && jugadaMaquina === piedra) ||
    (jugadaUsuario === tijera && jugadaMaquina === papel)
  ) {
    MENSAJE.innerHTML = '¡Has ganado! 🎉'
  } else if (
    (jugadaUsuario === tijera && jugadaMaquina === piedra) ||
    (jugadaUsuario === piedra && jugadaMaquina === papel) ||
    (jugadaUsuario === papel && jugadaMaquina === tijera)
  ) {
    MENSAJE.innerHTML = 'Has perdido ☠️'
  } else if (jugadaUsuario != piedra || papel || tijera) {
    MENSAJE.innerHTML = '«Entiendo que no quieres jugar. Adios»'
    jugadaUsuario = 0
  }

  let img1 = './img/' + arrayImagenes[jugadaUsuario] + '.png'
  let img2 = './img/' + arrayImagenes[jugadaMaquina] + '.png'

  console.log(img1)
  console.log(img2)

  IMAGEN1.src = img1
  IMAGEN2.src = img2
}
