import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

export default function App() {
  const char = useCharacter('Nullus');  
  const char2 = useCharacter('Klateia');

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
        char2.moveLeft();
        break;

      case 'KeyW':
        char2.moveLeft();
        break;

      case 'KeyS':
        char2.moveLeft();
        break;

      case 'KeyD':
        char2.moveLeft();
        break;

      case 'ArrowLeft':
        char.moveLeft();
        break;

      case 'ArrowUp':
        char.moveUp();
        break;

      case 'ArrowDown':
        char.moveDown();
        break;

      case 'ArrowRight':
        char.moveRight();
        break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
      </C.Map>
      
      <h3>Play 2s</h3>
      <C.Joystick>
        <button className="top" onClick={()=>char2.moveUp()}><i></i></button>
        <button className="left" onClick={()=>char2.moveLeft()}><i></i></button>
        <button className="right" onClick={()=>char2.moveRight()}><i></i></button>
        <button className="bottom" onClick={()=>char2.moveDown()}><i></i></button>
      </C.Joystick>   
    </C.Container>
  );
}
