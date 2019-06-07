import React from 'react';

import inputInfo from './Model/info.json';
import Category from './Model/category';
import Tag from './Model/tag';

import CategoryTag from './category-tag/category-tag.js';
import SearchTag from './search-tag/search-tag.js';
import NewTag from './add-new-tag/add-new-tag.js';

import produce from 'immer';

import "./App.css"

class App extends React.PureComponent {

  categories  = [];

  constructor() {
    super();
    this.initializeApp();
    this.state = {"categories": this.categories, "searchedValue": "", "selectedTags": [], "showLightbox": false};
  }

  initializeApp() {

    for ( let category of inputInfo ) {
      const cat = new Category(category.name, category.color);
      for ( let tag of category.tags ) {
        const tg  = new Tag(tag.id, tag.name, tag.description, tag.group, tag.isEnable);
        cat.addTag(tg);
      } 
      this.categories.push(cat);
    }
  }

  handleEnableTag = (tagIndex, categoryIndex) => {
    this.setState(produce(this.state, draft => {
              draft.categories[categoryIndex].tags[tagIndex].isEnable
                = !this.state.categories[categoryIndex].tags[tagIndex].isEnable;
            }));
  }

  handleInputEnter  = (value) => {
    this.setState(produce(draft => {
      draft.searchedValue = value;
    }));
  }

  handleAddTag      = (categoryIndex, tagIndex) => {
    const tag   = {...this.state.categories[categoryIndex].tags[tagIndex], "color": this.state.categories[categoryIndex].color };
    this.setState(produce(draft => {
      draft.selectedTags.push(tag);
    }));
  }

  handleCancelTag   = (tagIndex) => {
    this.setState(produce(draft => {
      draft.selectedTags.splice(tagIndex, 1)
    }));
  }

  showNewTagLightbox  = () => {
    this.setState({
      "showLightbox": true
    });
  }

  handleCloseLightbox = () => {
    this.setState(produce(draft => {
      draft.showLightbox = false
    }));
  }

  handleAddNewTag = (newtag) => {
    const categoryMapper = ["country", "city"];
    const tagId   = categoryMapper[newtag.category]+(this.state.categories[newtag.category].tags.length + 1);
    const tag     = new Tag(tagId, newtag.name, newtag.description, newtag.group, true);
    this.setState(produce(draft => {
      draft.categories[newtag.category].tags.push(tag);
      draft.showLightbox  = false;
    }));
  }

  render() {
    const isDropdownVisible = this.state.searchedValue.length > 0 ? "visible" : "hidden";
    return (
      <div className="appParent">
        <NewTag onNewTag={this.handleAddNewTag}
                isVisible={this.state.showLightbox} 
                closeLightbox={this.handleCloseLightbox} />
        <div>
          <SearchTag inputEnter={this.handleInputEnter} tags={this.state.selectedTags}
                    cancelTag={this.handleCancelTag}
                    addNewTag={this.showNewTagLightbox} />
          <div style={{visibility: isDropdownVisible }} className="appCategoryTag">
            {this.state.categories.map( (cat, index) => 
              <CategoryTag 
                key={cat.name}
                name={cat.name} tags={cat.tags} color={cat.color}
                searchText={this.state.searchedValue}
                enableTag={(tagIndex) => {this.handleEnableTag(tagIndex, index)}} 
                addTag={ (tagIndex) => {this.handleAddTag(index, tagIndex)} }
                /> )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
