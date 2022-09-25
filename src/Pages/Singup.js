import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../Component/Base";
import { signup } from "../services/user-services";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  // reseting form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  // submit form

  const submitForm = (event) => {
    event.preventDefault();

    signup(data)
      .then((response) => {
        console.log(response);
        resetData();
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <Base>
      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h2>Signup Here</h2>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm} method="POST">
                  {/* name fileld */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter Here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* Email fileld */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter Here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* Password field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Enter Here"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* About fileld */}
                  <FormGroup>
                    <Label for="about">Enter About</Label>
                    <Input
                      name="about"
                      type="textarea"
                      id="about"
                      placeholder="Enter Here"
                      onChange={(e) => handleChange(e, "about")}
                      style={{ height: "80px" }}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>
                  <Container className="text-center ">
                    <Button color="dark">Register</Button>
                    <Button
                      onClick={resetData}
                      className="ms-2"
                      color="secondary"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}
