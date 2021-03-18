import Div from "div";
import React, {Component} from "react";
import classes from "../../../assets/css/Homepage/NewArticle/NewArticle.module.css";
import {Container, Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Button} from 'reactstrap';

// REACT QUILL TEXT EDITOR
import ReactQuill from 'react-quill';

// REACT QUILL TEXT EDITOR CSS
import './style.css';


import { Typography } from "@material-ui/core";



class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {
                title: '',
                content: '',
                createDate: new Date(),
                featureImage: '',
                isPublish: false,
                lastModified: new Date(),
                createUserID: ''
            }
        }
    }


    modules = {
        toolbar: {
            container: [
                [{'header': '1'}, {'header': '2'}, {'font': []}],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean'], ['code-block']
            ],
        },
        clipboard: {
            matchVisual: false,
        },
    }

    formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block',
    ]

    onChangeArticleTitle = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                title: value
            }
        })
    }

    onChangeArticleContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                content: value
            }
        })
    }

    onChangePublish = (val) => {
        this.setState({
            article: {
                ...this.state.article,
                isPublish: val === 'True'
            }
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xl={9} lg={9} md={8} sm={12} xs={12}>
                        <Typography variant="h2" className={classes.SectionTitle}>
                            New Article
                        </Typography>
                        <FormGroup>
                            <Label className={classes.Label}>
                                Title
                            </Label>
                            <Input 
                                type="text" 
                                name="articleTitle" 
                                id="articleTitle" 
                                placeholder=""
                                onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                                value={this.state.article.title}
                            />
                        </FormGroup>
                        
                        {/*TEXT EDITOR PART*/}
                        <FormGroup>
                            <ReactQuill
                                ref={(el) => this.quill = el}
                                value={this.state.article.content}
                                onChange={(e) => this.onChangeArticleContent(e)}
                                theme="snow"
                                modules={this.modules}
                                formats={this.formats}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={3} lg={3} md={4} sm={12} xs={12}>
                        <Card className={classes.card_mobile} >
                            <CardHeader>
                                Article Settings
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label className={classes.Label}>Publish</Label>
                                    <Input
                                        type="select"
                                        name="publish"
                                        id="publish"
                                        onChange={(e) => this.onChangePublish(e.target.value)}
                                    >
                                        <option>False</option>
                                        <option>True</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Button
                                        color="danger"
                                        onClick={(e) => console.log(this.state.article)}
                                    >
                                        Submit
                                    </Button>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewArticle;