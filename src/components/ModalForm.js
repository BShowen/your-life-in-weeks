import { Modal, Container, Row, Col } from "react-bootstrap";
import AddButton from "./AddButton";

export default function ModalForm(props) {
  if (props.isShowing) {
    return (
      <Modal show={props.isShowing} onHide={props.onHide || props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>{props.form}</Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  } else {
    return <AddButton clickHandler={props.toggle} />;
  }
}
