import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = {
    dayList: [],
    typeList : [],
    dayCount: 0,
    activeIndex: 0,
    i: 0,
    titles: [],
    activeContent: 0,
    activeType : 0,
    isHidden : true,
    editHidden:true,
    isCleared: false,
    topictitle : '',
    topictype : '',
    topicContent: '',
    topicInstructions : '',

    getDay(){
      this.isHidden = false;
      this.isCleared = true;
      let obj = {};
      let obj2 = {};
      obj["dayNum"] = "Day "+(++this.i);
      this.dayList.push(obj);
      this.typeList.push(obj2);
      this.titles.push([]);
      this.dayCount = this.dayList.length; 
    },

    closeBtn(index){
      this.dayList.splice(index,1);
      this.dayCount = this.dayList.length;
      this.titles.splice(index,1);
      console.log(this.dayList.length);
    },
    select(index: number) {
      this.isHidden = false;
      this.activeIndex = index;
      console.log(this.titles[index])
    },
    createTitle(){ 
      let obj = {title : this.topictitle, tp : this.topictype, tc : this.topicContent, ti:this.topicInstructions};
      this.titles[this.activeIndex].push(obj);
      console.log(this.titles)
      },
      
    selectContent(index:number){
      this.activeContent = index;
    },
    selectType(index){
      this.activeType = index;
    },

    closeContent(index){
      this.titles[this.activeIndex].splice(index,1);
    },
    edit(){
      this.editHidden = false;
    },
    clearContent(){
      this.titles[this.activeIndex].splice(this.index,1);
    }
    }
  }
