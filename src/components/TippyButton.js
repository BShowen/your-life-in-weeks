import { Button } from "react-bootstrap";
import { FaChevronCircleUp } from "react-icons/fa";

export default function TippyButton(props) {
  const { toggleActive, active } = props;
  return (
    <Button
      variant="info"
      size="lg"
      onClick={toggleActive}
      style={{ height: "100%", width: "100%" }}
      className={"d-flex justify-content-center align-items-center p-1"}
    >
      <FaChevronCircleUp
        className={`chevron ${active ? "rotate" : ""}`}
        style={{ minWidth: "100%", minHeight: "100%" }}
      />
    </Button>
  );
}
