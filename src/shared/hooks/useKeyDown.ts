import { useEffect, useState } from 'react';

interface Props {
  keys: KeyboardEventKey[];
  onKeyPress?: (keys: KeyboardEventKey[]) => void;
}

export const useKeyDown = ({ keys, onKeyPress }: Props) => {
  const [pressedKeys, setPressedKeys] = useState<KeyboardEventKey[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.includes(event.key as KeyboardEventKey)) {
        const newPressedKeys: KeyboardEventKey[] = [
          ...pressedKeys,
          event.key as KeyboardEventKey,
        ];
        onKeyPress?.(newPressedKeys);
        setPressedKeys(newPressedKeys);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (keys.includes(event.key as KeyboardEventKey)) {
        setPressedKeys(pressedKeys.filter(key => key !== event.key));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keys]);

  return { pressedKeys };
};
