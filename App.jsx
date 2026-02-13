import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

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
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61c280f0-6c35-4f2b-9ffb-f2a71f1c651e/dfcchik-394a749b-9507-4417-b529-765739f3d39d.png/v1/fill/w_944,h_847/snoopy_com_muito_amor_by_bradsnoopy97_dfcchik-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ3IiwicGF0aCI6IlwvZlwvNjFjMjgwZjAtNmMzNS00ZjJiLTlmZmItZjJhNzFmMWM2NTFlXC9kZmNjaGlrLTM5NGE3NDliLTk1MDctNDQxNy1iNTI5LTc2NTczOWYzZDM5ZC5wbmciLCJ3aWR0aCI6Ijw9OTQ0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.13Lp6Y986G8xO0wL_oJ-x3X-mAnE3zWn-kPntpU4XgM',
    },
    {
      id: 2,
      description: 'Piénsalo de nuevo',
      img: 'https://i.pinimg.com/originals/77/b1/10/77b110ac65b686d63965d21e06e303d8.png',
    },
    {
      id: 3,
      description: 'Vamos, di que si',
      img: 'https://www.creativosonline.org/wp-content/uploads/2021/11/Snoopy-6.png',
    },
    {
      id: 4,
      description: 'No te arrepentirás',
      img: 'https://i.pinimg.com/736x/87/40/3e/87403ee321a97d754167527181c9a175.jpg',
    },
  ];

  const randomResponse = () => {
    let index = Math.floor(Math.random() * random.length);
    setRandomValor(random[index]);
    setPosition('absolute');
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <main id="container" className="fondo flex justify-center items-center h-screen bg-no-repeat bg-cover">
      {!valueSi ? (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">¿Quieres ser mi San Valentín?</h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? 'https://i.pinimg.com/originals/11/44/85/114485542f703e1e5554da0a149f1090.png'
                : randomValor.img
            }
            alt="Snoopy"
            className="mx-auto w-60"
          />
          <div className="grid grid-cols-2 gap-10 w-full relative">
            <button
              onClick={() => {
                setValueSi(true);
                jsConfetti.addConfetti({
                  emojis: ['❤️', '💖', '✨'],
                  emojiSize: 50,
                  confettiNumber: 200,
                });
              }}
              className="bg-green-500 text-white font-bold p-2 rounded-md text-xl"
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
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">
            ¡Sabía que dirías que sí ❤️!
          </h1>
          <img
            src="https://i.pinimg.com/originals/06/5d/87/065d87fcd8c3d08700ca98d8963e34dd.png?nii=t"
            alt="Felicidad"
            className="mx-auto"
          />
        </div>
      )}
    </main>
  );
}

export default App;
