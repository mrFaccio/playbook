const repo = {
    name: 'Mission NodeJS',
    author: 'Lenin Facio',
    language: 'Javascript',
    numberOfCommits: 50,
    stars: 25,
    forks: 40,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }

}

console.log("Nombre del repo: " + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log("Información general: " + repo.getGeneralInfo());

const issue = {
    title: 'My first issue',
    repositoryNameAssociated: 'my-repository',
    status: 'open',
    numberOfComments: 5,
    labels: ['bug', 'enhancement'],
    author: 'Lenin Facio',
    dateCreated: '2020-01-01',
    lastUpdated: '2020-01-02',
    getTitleAndAuthor: function () {
        return `The issue: ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function () {
        return `This issue was created on ${this.dateCreated} and was last updated on ${this.lastUpdated} ahd his status is ${this.status}`
    }
}
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const pullRequest = {
    tittle: 'My first pull request',
    author: 'Lenin Facio',
    branchName: 'my-branch',
    dateCreated: '2022-01-01',
    status: 'open',
    repositoryNameAssociated: 'my-repository',
    getStatus: function () {
        return `This pull request is ${this.status}`
    },
    getTitleAndAuthor: function () {
        return `${this.tittle} was created by ${this.author}`
    }
}
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());