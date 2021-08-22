document.getElementById('submit-comment').addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    // console.log(commentBox.value);
    // get user
            
    // const userComment = commentBox.value;

    //create paragraph element
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    //append the comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    commentBox.value = '';
})