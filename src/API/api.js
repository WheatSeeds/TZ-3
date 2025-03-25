export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export async function fetchUser(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    return await response.json();
}

export async function fetchComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return await response.json();
}
