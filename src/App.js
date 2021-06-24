import './App.css';
import {useEffect, useState} from "react";
import {getComment, getComments} from "./services/API";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/comment-details/CommentDetails";


function App() {
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);
    useEffect(() => {
        getComments().then(value => {
            setComments(value.data);
        })
    }, []);

    function showComment(id) {
        getComment(id).then(value => {
            setComment(value.data);
        })
    }

    return (
        <div>
            <Comments item={comments} showComment={showComment}/>
            <hr/>
            {
                comment && <CommentDetails item={comment}/>
            }
        </div>
    );
};

export default App;
