export default function Comment({item: {id, name, email}, showComment}) {
    return (
        <div>
            {id}. {name}
            <h5>
                {email}
            </h5>
            <button onClick={
                () => {
                    showComment(id);
                }
            }
            >Comment
            </button>
        </div>
    );
}