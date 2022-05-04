const user = {
    name: 'Lenin Facio',
    profileImage: 'https://www.facebook.com/photo/',
    numberOfFriends: 500,
    getInfo: function () {
        return `This user: ${this.name} ${this.profileImage} and ${this.numberOfFriends} friends`
    }
}
console.log(user.getInfo());

const post = {
    image: 'https://www.facebook.com/photo/',
    description: 'The best pic',
    likes: 200,
    comments: 50,
    getPost: function () {
        return `This post: ${this.image} has ${this.likes} likes and ${this.comments} comments`
    }
}
console.log(post.getPost());

const biography = {
    school: 'Instituto Politécnico Nacional',
    city: 'CDMX',
    status: 'Single',
    getBiography: function () {
        return `Study in ${this.school} in ${this.city} and is ${this.status}`
    }
}
console.log(biography.getBiography());