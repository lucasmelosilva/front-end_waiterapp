import closeIcon from "../../assets/images/close-icon.svg";

import { ModalBody, Overlay } from "./styles";

export function FormModal() {
  return (
    <Overlay>
      <ModalBody>
        <header>
          <ul>
            <li>Nova categoria</li>
            <li>Novo produto</li>
          </ul>

          <button>
            <img src={closeIcon} alt="close" />
          </button>
        </header>
      </ModalBody>
    </Overlay>
  );
}
