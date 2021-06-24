import Comment from "../comment/Comment";

export default function Comments({item, showComment}) {
    return (
        <div>
            {item.map(value => <Comment key={value.id} item={value} showComment={showComment}/>)}
        </div>
    );
}