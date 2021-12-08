import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Error from "../loading&error/Error";
import Loading from "../loading&error/Loading";
import createnoteaction from "../../redux/actions/createNoteaction";
import {useHistory} from "react-router-dom";
import {ReactMarkdown} from "react-markdown/lib/react-markdown";

const CreateNote = () => {
    const history = useHistory();
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const [category, setCategory] = useState("");
    
      const dispatch = useDispatch();
    
      const notecreate = useSelector((state) => state.notecreate);
      const { loading, error, note } = notecreate;
    
      console.log(note);
    
      const resetHandler = () => {
        setTitle("");
        setCategory("");
        setContent("");
      };
    
      const submitHandler = (e) => {
        e.preventDefault();
        if (!title || !content || !category) return;
        dispatch(createnoteaction(title, content, category));
    
        resetHandler();
        history.push("/mynotes");
      };
    
      useEffect(() => {}, []);

    return (    
        <div className="container my-5">
            <Card>
                <Card.Header><h3>Create a new Note</h3></Card.Header>
                <Card.Body>
                {error && <Error error={error.message} />}
                {loading && <Loading/>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="title"
                        value={title}
                        placeholder="Enter the title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={content}
                        placeholder="Enter the content"
                        rows={4}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    </Form.Group>
                    <div className="w-100 my-3">
                        {content && (
                            <Card>
                            <Card.Header><h2>Note Preview</h2></Card.Header>
                            <Card.Body>
                            <ReactMarkdown>{content}</ReactMarkdown>
                            </Card.Body>
                        </Card>
                        )}
                    </div>

                    <Form.Group controlId="content">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="content"
                        value={category}
                        placeholder="Enter the Category"
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                    </Form.Group>
                    {loading && <Loading size={50} />}
                    <div className="w-100 m-3">
                        <Button type="submit" variant="outline-primary">
                        Create Note
                        </Button>
                        <Button className="mx-2" onClick={resetHandler} variant="outline-danger">
                        Reset Feilds
                        </Button>
                    </div>
                </Form>
                </Card.Body>

                <Card.Footer className="text-muted">
                Creating on - {new Date().toLocaleDateString()}
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CreateNote
