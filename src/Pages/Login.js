import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { doLogin } from "../auth";
import Base from "../Component/Base";
import { BASE_URL, myAxios } from "../services/helper";
import { loginUser } from "../services/user-services";

export default function Login() {
  const navigateTo = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualData = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualData,
    });
  };
  const validateForm = () => {
    if (loginDetail.email.trim() == "" || loginDetail.password.trim() == "") {
      toast.error("Please Enter Email and Password!!");
      return;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    validateForm();
    //console.log(loginDetail);
    loginUser(loginDetail)
      .then((loginData) => {
        console.log("Login success");
        doLogin(loginData, () => {
          navigateTo("/user/dashboard");
        });
      })
      .catch((error) => {
        if (error.response.status === 404 || error.response.status === 401) {
          toast.error("Invalid Email or Password");
        } else {
          toast.error("Opps! Something went wrong!!");
        }
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h2>Login Here</h2>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmitForm} method="POST">
                  {/* Email fileld */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter Here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={loginDetail.email}
                    />
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
                      value={loginDetail.password}
                    />
                  </FormGroup>

                  <Container className="text-center ">
                    <Button color="dark">Login</Button>
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
