document.addEventListener('DOMContentLoaded', async () => {
    const divArticle = document.createElement('div');
    document.body.append(divArticle);

    async function getArticle() {
        const response = await fetch('https://gorest.co.in/public-api/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // response.json().then()
        console.log(response.json());
        divArticle.innerHTML = response.json();
    }
    getArticle();
});