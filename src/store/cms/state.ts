import { ContentModel } from "src/core/Models/ContentModel";


export interface CMSInterface {
    content:ContentModel|null
}

const state: CMSInterface = {
    content: null as null | ContentModel
};

export default state;
