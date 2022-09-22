import { orderBy } from "lodash";
import React, { useState, useEffect } from "react";
import api from "../../../../api";
import { useParams } from "react-router-dom";
import AddComment from "./addComment";
import CommentList from "./commentList";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);
    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };
    const handleRemoveComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComments(comments.filter((x) => x._id !== id));
        });
    };
    const sortedComments = orderBy(comments, ["created_at"], ["dasc"]);
    return (
        <>
            <div className="col-md-8">
                <div className="card mb-2">
                    {" "}
                    <div className="card-body ">
                        <AddComment onSubmit={handleSubmit} />
                    </div>
                </div>
                {sortedComments.length > 0 && (
                    <div className="card mb-3">
                        <div className="card-body ">
                            <h2>Comments</h2>
                            <hr />
                            <CommentList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Comments;
