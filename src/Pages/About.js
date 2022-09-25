import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardText,
  CardFooter,
  CardTitle,
} from "reactstrap";
import Base from "../Component/Base";

export default function About() {
  return (
    <Base>
      <div>
        <div className="container">
          <Card
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
    </Base>
  );
}
