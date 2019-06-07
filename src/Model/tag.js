
import {immerable} from "immer";

class Tag {

    name;
    description;
    group;
    isEnable;
    id;
    constructor (id, name, description, group, isEnable) {
        this.id     =   id;
        this.name   =   name;
        this.description    =   description;
        this.group  =   group;
        this.isEnable   =   isEnable;
    }
}

Tag[immerable] = true;
export default Tag;
