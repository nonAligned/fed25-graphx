import { Comment } from './comment.model';
export class CommentList {
    count: number;
    results: Comment[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.results = obj && obj.results || null;
        } else {
            this.results = [];
        }
    }
}