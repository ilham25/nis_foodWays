import { Modal, Col, Row, Button } from "react-bootstrap";
import iconMapPointer from "../../assets/svg/map-pointer.svg";

import MapRender from "../MapRender";
function MapModal({ show, handleMapClose, children }) {
  return (
    <Modal show={show} dialogClassName="custom-modal" onHide={handleMapClose}>
      <Modal.Body style={{ position: "relative" }}>
        <MapRender />
        {children}
      </Modal.Body>
    </Modal>
  );
}

export default MapModal;
