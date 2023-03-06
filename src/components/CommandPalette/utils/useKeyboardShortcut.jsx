import { useCallback, useEffect, useState } from "react";

const useKeyboardShortcut = (keyCombo, callback) => {
  const [pressedKeys, setPressedKeys] = useState([]);

  const onKeyDown = useCallback(
    e => {
      const { key, repeat } = e;
      if (repeat) return;
      if (pressedKeys.includes(key)) return;
      setPressedKeys([...pressedKeys, key]);
    },
    [pressedKeys]
  );

  const onKeyUp = useCallback(
    e => {
      const { key } = e;
      const newPressedKeys = pressedKeys.filter(pressedKey => pressedKey !== key);
      setPressedKeys(newPressedKeys);
    },
    [pressedKeys]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, [onKeyUp]);

  const isMatch = (keyCombo, pressedKeys) => {
    const wantKeysArray = keyCombo
      .toLowerCase()
      .split("+")
      .map(str => str.trim())
      .map(str => (str === "ctrl" ? "control" : str));

    const pressedKeysArray = pressedKeys.map(key => key.toLowerCase());
    if (pressedKeysArray.length !== wantKeysArray.length) return false;
    if (pressedKeysArray.some(pressedKey => !wantKeysArray.includes(pressedKey))) return false;
    return true;
  };

  useEffect(() => {
    if (isMatch(keyCombo, pressedKeys)) callback();
  }, [pressedKeys, keyCombo, callback]);
};

export default useKeyboardShortcut;
