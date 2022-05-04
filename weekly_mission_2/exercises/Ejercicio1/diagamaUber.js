const profile = {
    name: 'Lenin',
    profileImage: 'photo',
    numberOfStars: 4.9,
    messages: ['message1', 'message2', 'message3'],
    getProfile: function () {
        return `This user: ${this.name} ${this.profileImage} has ${this.numberOfStars} stars`
    }
}
console.log(profile.getProfile());

const travel = {
    startTrip: 'Home',
    finishTrip: 'Work',
    cost: 150,
    stars: 4.5,
    getInfo: function () {
        return `This trip: ${this.startTrip} to ${this.finishTrip} cost ${this.cost} and the driver has ${this.stars} stars`
    }

}
console.log(travel.getInfo());