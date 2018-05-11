export class News{
    public imageUrl: string;
    public title: string;
    public author: string;
    public description: string;
    public fullurl: string;
    public publishDate: string;
    public publishedTime: string;

    constructor(i:string, t:string,a:string, s:string, f:string, p:string,time:string){
        this.imageUrl = i;
        this.title = t;
        this.author = a;
        this.description = s;
        this.fullurl = f;
        this.publishDate = p;
        this.publishedTime = time;
    }
}