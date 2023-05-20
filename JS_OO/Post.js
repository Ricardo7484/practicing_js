//Arrange dates in ascending order

class Post{
    constructor (title, date){
        this.title = title;
        this.date = date;
    }

    static comparePosts(item1, item2){
        var value = item1.date - item2.date
        //console.log(getDay(item1.date) + " - " + getDay(item2.date) + " = " + value)
        //console.log(value)
        return value
        //return item1.date - item2.date;
    }
}

const post = [
    new Post('Title 1', new Date('2018/08/4')),
    new Post('Title 2', new Date('2018/09/4')),
    new Post('Title 3', new Date('2018/04/6')),
    new Post('Title 4', new Date('2018/04/20')),
    new Post('Title 5', new Date('2018/04/1')),
];

let vectorDates = post.sort(Post.comparePosts);

console.log(vectorDates);