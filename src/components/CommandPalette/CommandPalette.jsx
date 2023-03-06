import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import isVisibleXY from "./utils/isVisibleXY";
import useKeyboardShortcut from "./utils/useKeyboardShortcut";

const CommandPalette = ({
  commands = [],
  open = false,
  closeOnSelect = false,
  resetInputOnOpen = false,
  placeholder = "Search command...",
  defaultInputValue = "",
  onInputChange = (inputValue, userTypedValue) => {},
  onSelect = command => {},
  onAfterOpen = () => {},
  onRequestClose = () => {},
  shouldReturnFocusAfterClose = true,
  renderCommand,
  maxCommandsToDisplay = Infinity,
  keyboardShortcut = "ctrl+shift+k",
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [inputVal, setInputVal] = useState(defaultInputValue);
  const [previousElementBeforeModalOpen, setPreviousElementBeforeModalOpen] = useState(null);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredCommands, setFilteredCommands] = useState(commands);
  const [commandRefs, setCommandRefs] = useState([]);
  const commandsScrollContainerRef = useRef();
  useKeyboardShortcut(keyboardShortcut, () => setIsOpen(true));

  // when argument `open` changes, also change local `isOpen`
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  // Every time cmd palette re-opens, set active suggestion to 0 and scroll to top
  useEffect(() => {
    if (!isOpen) return;
    setActiveSuggestion(0);
    commandsScrollContainerRef?.current?.scrollToTop?.();
  }, [isOpen]);

  // Assign refs to command elements
  useEffect(() => {
    const commandRefs = filteredCommands.reduce((acc, _, idx) => {
      acc[idx] = createRef();
      return acc;
    }, {});
    setCommandRefs(commandRefs);
  }, [filteredCommands]);

  // Scroll into view if active suggestion is not visible, when active suggestion changes
  useEffect(() => {
    const element = commandRefs[activeSuggestion]?.current;
    if (!element || isVisibleXY(element, 100, 100)) return;

    const elRect = element.getBoundingClientRect();
    const parent = element.parentNode;
    const parentRect = parent.getBoundingClientRect();
    if (elRect.top < parentRect.top) {
      parent.scrollBy(0, elRect.top - parentRect.top);
    } else {
      parent.scrollBy(0, elRect.bottom - parentRect.bottom);
    }
  }, [commandRefs, activeSuggestion]);

  // Call fn after open if provided
  useEffect(() => {
    if (isOpen) onAfterOpen?.();
  }, [isOpen, onAfterOpen]);

  // Reset input on open
  useEffect(() => {
    if (!isOpen) return;
    if (!resetInputOnOpen) return;
    setInputVal(defaultInputValue);
  }, [isOpen, resetInputOnOpen, defaultInputValue]);

  // Filter commands on input change
  const str = JSON.stringify(commands);
  useEffect(() => {
    if (!inputVal) setFilteredCommands(commands);
    else {
      setFilteredCommands(
        commands.filter(command => command.text?.toLowerCase().includes(inputVal.toLowerCase()))
      );
    }
  }, [inputVal, str]);

  // Close command palette
  const closeCommandPallete = useCallback(() => {
    setIsOpen(false);
    onRequestClose();
  }, [onRequestClose]);

  // When command is clicked
  const onClickCommand = useCallback(
    command => {
      command.onSelect?.();
      onSelect?.(command);
      if (closeOnSelect) closeCommandPallete();
    },
    [closeCommandPallete, closeOnSelect, onSelect]
  );

  // when command is entered
  const onEnterCommand = useCallback(
    command => {
      onClickCommand(command);
    },
    [onClickCommand]
  );

  // Set key down event listener
  useEffect(() => {
    const onKeyDown = e => {
      if (isOpen) {
        if (e.key === "ArrowDown")
          setActiveSuggestion(activeSuggestion => (activeSuggestion + 1) % filteredCommands.length);
        else if (e.key === "ArrowUp")
          setActiveSuggestion(
            activeSuggestion => (activeSuggestion - 1 + filteredCommands.length) % filteredCommands.length
          );
        else if (e.key === "Enter") {
          onEnterCommand(commands[activeSuggestion]);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, activeSuggestion, commands, onEnterCommand, filteredCommands.length]);

  // Handle focus of clicked element after modal open & close
  useEffect(() => {
    if (isOpen) {
      setPreviousElementBeforeModalOpen(document.activeElement);
    } else {
      if (shouldReturnFocusAfterClose) previousElementBeforeModalOpen?.focus();
    }
  }, [isOpen, shouldReturnFocusAfterClose, previousElementBeforeModalOpen]);

  // when search input value changes
  const onCmdInputChange = e => {
    setInputVal(e.target.value);
    onInputChange?.(e.target.value, e.nativeEvent?.data);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeCommandPallete}
        showCloseIcon={false}
        className="rounded-lg w-[600px] max-w-[100vw] bg-white shadow-xl top-20"
      >
        <div className="">
          <div className="pt-4 gap-8 flex items-center py-2 px-4 text-sm">
            <div>Command Palette</div>
            <div className="hidden grow sm:flex justify-between items-center">
              <div>
                <span className="text-gray-700 mr-1">
                  <i className="fa-solid fa-up-down"></i>
                </span>
                <span>to navigate</span>
              </div>

              <div>
                <span className="rounded-md px-1.5 mr-1 bg-gray-200 font-medium">enter</span>
                <span>to select</span>
              </div>

              <div>
                <span className="rounded-md px-1.5 mr-1 bg-gray-200 font-medium">esc</span>
                <span>to dismiss</span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-gray-500 pl-3 pr-2">
              <i className="fa-solid fa-search"></i>
            </span>
            <input
              className="bg-inherit flex-grow py-2 pl-2 pr-4 outline-none"
              placeholder={placeholder}
              value={inputVal}
              onChange={onCmdInputChange}
            />
          </div>

          <hr className="border-gray-200 mx-2 mb-3" />

          <div className="max-h-[300px] overflow-y-auto select-none" ref={commandsScrollContainerRef}>
            {filteredCommands.slice(0, maxCommandsToDisplay).map((command, idx) => (
              <div
                ref={commandRefs[idx]}
                key={idx}
                className={`px-4 py-2 hover:bg-gray-300 cursor-pointer border-l-2 ${
                  idx === activeSuggestion ? "bg-gray-200 border-l-blue-500" : "border-l-transparent"
                }`}
                onClick={() => onClickCommand(command)}
              >
                {renderCommand?.(command) || <div>{command.text}</div>}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommandPalette;
