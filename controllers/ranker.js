const ranker = (votes) => {
    let rankRaw = [];
    let staged = [];
    votes.map((artist, index) => {
        rankRaw.push(artist.userVotes);
    });
    for (let i = 0; i < rankRaw.length; i++) {
        const item = rankRaw[i];
        staged.push(item[0].artistId);
    }
    let sorted = staged.sort();

    return sorted;
};

const goatRanker = (array, results) => {
    let tempArr = ranker(array)
    let votes = [];
    let count = 1;
    let goats = [];
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === tempArr[i + 1]) {
            count++;
        } else {
            let value = {
                id: `${tempArr[i]}`,
                rank: count
            };
            votes = [...votes, value];
            count = 1;
        }
    }
    const compare = (a, b) => {
        const ArtistOne = a.rank;
        const ArtistTwo = b.rank;

        let comparison = 0;
        if (ArtistOne > ArtistTwo) {
            comparison = 1;
        } else if (ArtistOne < ArtistTwo) {
            comparison = -1;
        }
        return comparison * -1;
    };

    return votes.sort(compare).splice(0, results);
};

module.exports = goatRanker