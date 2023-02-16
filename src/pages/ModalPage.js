import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
        eros felis. Phasellus id malesuada quam, vitae dictum nunc. Duis
        elementum tortor id ipsum ultricies lobortis. Donec vulputate pulvinar
        posuere. Donec ut nunc diam. Nulla facilisi. Mauris velit eros, vehicula
        sed erat sit amet, laoreet imperdiet dolor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Maecenas non eros felis. Phasellus id
        malesuada quam, vitae dictum nunc. Duis elementum tortor id ipsum
        ultricies lobortis. Donec vulputate pulvinar posuere. Donec ut nunc
        diam. Nulla facilisi. Mauris velit eros, vehicula sed erat sit amet,
        laoreet imperdiet dolor. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas non eros felis. Phasellus id malesuada quam,
        vitae dictum nunc. Duis elementum tortor id ipsum ultricies lobortis.
        Donec vulputate pulvinar posuere. Donec ut nunc diam. Nulla facilisi.
        Mauris velit eros, vehicula sed erat sit amet, laoreet imperdiet dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
        eros felis. Phasellus id malesuada quam, vitae dictum nunc. Duis
        elementum tortor id ipsum ultricies lobortis. Donec vulputate pulvinar
        posuere. Donec ut nunc diam. Nulla facilisi. Mauris velit eros, vehicula
        sed erat sit amet, laoreet imperdiet dolor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Maecenas non eros felis. Phasellus id
        malesuada quam, vitae dictum nunc. Duis elementum tortor id ipsum
        ultricies lobortis. Donec vulputate pulvinar posuere. Donec ut nunc
        diam. Nulla facilisi. Mauris velit eros, vehicula sed erat sit amet,
        laoreet imperdiet dolor. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas non eros felis. Phasellus id malesuada quam,
        vitae dictum nunc. Duis elementum tortor id ipsum ultricies lobortis.
        Donec vulputate pulvinar posuere. Donec ut nunc diam. Nulla facilisi.
        Mauris velit eros, vehicula sed erat sit amet, laoreet imperdiet dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
        eros felis. Phasellus id malesuada quam, vitae dictum nunc. Duis
        elementum tortor id ipsum ultricies lobortis. Donec vulputate pulvinar
        posuere. Donec ut nunc diam. Nulla facilisi. Mauris velit eros, vehicula
        sed erat sit amet, laoreet imperdiet dolor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Maecenas non eros felis. Phasellus id
        malesuada quam, vitae dictum nunc. Duis elementum tortor id ipsum
        ultricies lobortis. Donec vulputate pulvinar posuere. Donec ut nunc
        diam. Nulla facilisi. Mauris velit eros, vehicula sed erat sit amet,
        laoreet imperdiet dolor. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas non eros felis. Phasellus id malesuada quam,
        vitae dictum nunc. Duis elementum tortor id ipsum ultricies lobortis.
        Donec vulputate pulvinar posuere. Donec ut nunc diam. Nulla facilisi.
        Mauris velit eros, vehicula sed erat sit amet, laoreet imperdiet dolor.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
        eros felis. Phasellus id malesuada quam, vitae dictum nunc. Duis
        elementum tortor id ipsum ultricies lobortis. Donec vulputate pulvinar
        posuere. Donec ut nunc diam. Nulla facilisi. Mauris velit eros, vehicula
        sed erat sit amet, laoreet imperdiet dolor.
      </p>
    </div>
  );
}

export default ModalPage;
