import { Modal, Container, Row, Col } from "react-bootstrap";

export default function ModalForm(props) {
  return (
    <Modal
      show={props.isShowing}
      onHide={props.onHide || props.toggle}
      style={{ paddingTop: "3rem" }}
    >
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
}
