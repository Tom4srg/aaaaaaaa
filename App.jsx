import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

import mixpanel from './lib/mixpanel';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [valueSi, setValueSi] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState('relative');

  let random = [
    {
      id: 1,
      description: 'Di si por favor',
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61c280f0-6c35-4f2b-9ffb-f2a71f1c651e/dfcchik-394a749b-9507-4417-b529-765739f3d39d.png/v1/fill/w_944,h_847/snoopy_com_muito_amor_by_bradsnoopy97_dfcchik-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQxNiIsInBhdGgiOiJcL2ZcLzYxYzI4MGYwLTZjMzUtNGYyYi05ZmZiLWYyYTcxZjFjNjUxZVwvZGZjY2hpay0zOTRhNzQ5Yi05NTA3LTQ0MTctYjUyOS03NjU3MzlmM2QzOWQucG5nIiwid2lkdGgiOiI8PTE1NzkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8V6ClcUxuXlu3k3a3fA69fggpxMagM9r90QR2cOs3FM',
    },
    {
      id: 1,
      description: 'Piénsalo de nuevo.',
      img: 'https://static.vecteezy.com/system/resources/previews/055/040/032/large_2x/snoopy-with-love-free-vector.jpg',
    },
    {
      id: 2,
      description: 'Vamos, atrévete a decir que sí.',
      img: 'https://i.pinimg.com/originals/4d/88/95/4d8895389ae1e035dc6bb71179b0c890.jpg',
    },
    {
      id: 3,
      description: 'No tengas miedo, será genial.',
      img: 'https://i.pinimg.com/originals/29/be/b8/29beb818490bdfe4952afba281f1bb26.jpg?nii=t',
    },
    {
      id: 4,
      description: 'Confía en mí, será divertido.',
      img: 'https://i.pinimg.com/originals/ea/30/73/ea3073d10e1ba28c9e8ddce90760de44.jpg',
    },
    {
      id: 5,
      description: 'No tengas dudas, te hará sonreír.',
      img: 'https://ivector.xyz/public/wp-content/uploads/SNOOPY-GLOBO-CORAZONES-AMOR-EDITABLE-EPS-PDF-VECTOR-01.jpg',
    },
    {
      id: 6,
      description: 'Te prometo que será inolvidable.',
      img: 'https://i.pinimg.com/originals/19/cc/93/19cc9398e989230dd72691d4be59950b.jpg',
    },
    {
      id: 7,
      description: 'No dejes que el miedo te detenga.',
      img: 'https://i.pinimg.com/originals/76/2f/1a/762f1a1728f6c62cf041a32b0cc5a507.jpg',
    },
    {
      id: 8,
      description: 'Confía en el destino, nos está dando una señal.',
      img: 'https://i.pinimg.com/originals/13/17/f6/1317f6d4afc0bf71bf8af32eda65feb2.jpg',
    },
    {
      id: 9,
      description: 'Confía en mí.',
      img: 'https://i.pinimg.com/originals/af/f4/f1/aff4f1c142b187e24cbb66b3a175f306.jpg',
    },
    {
      id: 10,
      description: 'No te arrepentirás.',
      img: 'https://i.pinimg.com/originals/0b/31/fc/0b31fcf08e00174514cd33de7169fb9a.jpg',
    },
    {
      id: 11,
      description: 'Ya pon que siiii',
      img: 'https://i.pinimg.com/originals/01/2a/ba/012aba9eff50ea62ebc9c5d0c05878af.jpg',
    },
    {
      id: 12,
      description: 'Dale, no seas mala',
      img: 'https://wallpapers.com/images/hd/sitting-snoopy-hugging-heart-yeoebcdm76d1a59f.jpg',
    },
  ];

  const randomResponse = () => {
    mixpanel.track('Boton No Clickeado');

    let randX = Math.random() * 70;
    let randY = Math.random() * 80;

    let index = Math.floor(Math.random() * random.length);
    setPosition('absolute');
    setButtonPosition({ top: randY, left: randX });
    setRandomValor(random[index]);
  };

  useEffect(() => {
    mixpanel.track('Pagina Cargada');
  }, []);

  return (
    <main
      id="canvas"
      className="w-screen relative h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
    >
      {!valueSi ? (
        <div className="p-5">
          <h1 className="font-bold text-5xl text-center">
            ¿Quieres ser mi San Valentin?
          </h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? 'https://i.pinimg.com/originals/b8/2c/06/b82c06f0b0b0e6f3288e1a9ff6a78bc7.png'
                : randomValor.img
            }
            alt="San Valentin"
            className="mx-auto object-cover h-[200px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button
              onClick={() => {
                mixpanel.track('Boton Si Clickeado');

                setValueSi(true);

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 200,
                });
              }}
              className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl`}
            >
              Si
            </button>
            <button
              className="bg-red-500 text-white min-w-48 font-bold p-2 rounded-md text-xl"
              onMouseOver={randomResponse}
              style={{
                position: position,
                top: `${buttonPosition.top}%`,
                left: `${buttonPosition.left}%`,
              }}
            >
              {Object.keys(randomValor).length === 0
                ? 'No'
                : randomValor.description}
              <span hidden>
                {
                  (document.title =
                    Object.keys(randomValor).length === 0
                      ? '¿Quieres ser mi San Valentin?'
                      : randomValor.description)
                }
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">
            Sabia que dirias que si ❤️!
          </h1>
          <img
            src="https://i.pinimg.com/originals/06/5d/87/065d87fcd8c3d08700ca98d8963e34dd.png?nii=t"
            alt=""
            className="mx-auto"
          />
          <span hidden>{(document.title = 'Sabia que dirias que si ❤️!')}</span>
        </div>
      )}
    </main>
  );
}

export default App;
