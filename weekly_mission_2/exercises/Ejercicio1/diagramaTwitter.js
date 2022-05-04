const user = {
    user: 'Lenin',
    username: 'lenfaccio',
    bio: 'I am a software developer',
    age: 19,
    getInfo: function () {
        return `This user: ${this.username} is ${this.age} years old`
    }
}
console.log(user.getInfo());

const trendingTopic = {
    category: 'technology',
    name: 'javascript',
    hashtag: '#javascript',
    description: 'This is a trending topic',
    numberOfTweets: 53760,
    getInfo: function () {
        return `This topic: ${this.name} is a ${this.category} topic and has ${this.numberOfTweets} tweets`
    }
}
console.log(trendingTopic.getInfo());

const hashtag = {
    symbol: '#',
    content: 'javascript',
    hashtag: '#javascript',
    getHashtag: function () {
        return `This hashtag is ${this.hashtag}`
    }
}
console.log(hashtag.getHashtag());
