import Div from 'div';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Typography from '@material-ui/core/Typography';

// firebase
import firebase from '../../../Config/firebase.js';

// html parser
import parse from 'html-react-parser';

// custom css
import classes from '../../../assets/css/Homepage/ViewArticle/ViewArticle.module.css';

// db firebase 
const db = firebase.firestore();

class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            isLoaded: false
        }

        console.log(this.props);
    }

    componentDidMount() {
        if (typeof this.props.location.state !== "undefined") {
            if (this.props.location.state.hasOwnProperty('article')) {
                this.setState({
                    article: this.props.location.state.article
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
            } else {
                this.getArticleByID(this.props.match.params.id)
            }
        }
    };

    getArticleByID = (aid) => {
        db.collection('Article')
            .doc(aid)
            .get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        article: doc.data()
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                } else {
                    this.props.history.push({pathname: "/"})
                }
            });
    };

    timeStampToString(ts) {
        const date = new Date(ts*1000);
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
    }


    render() {
        if (this.state.isLoaded) {
            return (
                <Container>
                    <Div className={classes.Article}>
                        <Div className={classes.ImageContainer}>
                            <img    
                                className={classes.Image} 
                                src={this.state.article.featureImage}
                                alt={this.state.article.title}
                            />
                            <Div className={classes.ArticleInfo}>
                                <Typography className={classes.Title} variant="h1">
                                    {this.state.article.title}
                                </Typography>
                                <Div className={classes.Date}>
                                    {this.timeStampToString(this.state.article.lastModified.seconds)}
                                </Div>
                            </Div>
                        </Div>
                        <Div className={classes.ArticleMain}>
                            {parse(this.state.article.content)}
                        </Div>
                    </Div>
                </Container>
            );
        } else {
            return (
                <Div>
                    Loading...
                </Div>
            );
        }
    }
}

export default withRouter(ViewArticle);

