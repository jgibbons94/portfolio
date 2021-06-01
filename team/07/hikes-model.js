const hikesCommentKey = "Hikes Comment";
const getAllComments = () => JSON.parse(localStorage.getItem(hikesCommentKey));
const comments = getAllComments();
const getHikeComments = hikeName => comments[hikeName];
const saveHikeComment = () => localStorage.setItem(hikesCommentKey, JSON.stringify(comments));
export default hikesModel { getHikeComment, saveHikeComment};