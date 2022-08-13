import { Button } from "react-bootstrap";
import { FaChevronCircleUp } from "react-icons/fa";

export default function TippyButton(props) {
  const { toggleActive, active } = props;
  return (
    <Button variant="primary" onClick={toggleActive}>
      <div className={"d-flex justify-content-center align-items-center"}>
        <FaChevronCircleUp className={`chevron ${active ? "rotate" : ""}`} />
      </div>
    </Button>
  );
}
