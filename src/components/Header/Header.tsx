import { useRouter } from "next/navigation";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

const Header = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ username?: string | undefined }>({
    defaultValues: {
      username: "",
    },
  });

  const submitHandler: SubmitHandler<{
    username?: string | undefined;
  }> = async ({ username }) => {
    router.push(`/${username}`);
  };

  return (
    <header className="p-2">
      <h1 className="text-center mb-4">GitHub User Finder</h1>
      <Container>
        <Form className="d-sm-flex" onSubmit={handleSubmit(submitHandler)}>
          <Form.Group
            className="w-100 mb-3 mb-sm-0"
            controlId="formBasicUsername"
          >
            <Form.Label>Enter GitHub Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              {...register("username", {
                required: "Field must not be empty",
              })}
              isInvalid={Boolean(errors.username)}
            />
            {errors.username && (
              <Form.Control.Feedback type="invalid">
                {errors.username.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <div className="d-flex justify-content-end ps-sm-3">
            <Button className="align-self-end" variant="dark" type="submit">
              Search
            </Button>
          </div>
        </Form>
      </Container>
    </header>
  );
};

export default Header;
