
import {immerable} from "immer";

class Category {

    name;
    color;
    tags;

    constructor (name, color) {
        this.name   =   name;
        this.color  =   color;
        this.tags   =   [];
    }

    addTag(tag) {
        this.tags.push(tag);
    }
}

Category[immerable] = true;

export default Category;
