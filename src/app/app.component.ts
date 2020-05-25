import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = {
    dayList: [],
    dayCount: 0,
    activeIndex: 0,
    i: 0,
    titles: {},
    activeContent: 0,

    getDay(){
      let obj = {};
      obj["dayNum"] = "Day "+(++this.i);
      this.dayList.push(obj);
      this.dayCount = this.dayList.length; 
    },

    closeBtn(index){
      this.dayList.splice(index,1);
      this.dayCount = this.dayList.length;
      console.log(this.dayList.length);
    },
    select(index: number) {
      this.activeIndex = index;
      console.log(this.titles[index])
    },
    createTitle(){ 
      this.titles[this.activeIndex] = [];
      this.titles[this.activeIndex].push(this.dayList[this.activeIndex].title);
      console.log(this.titles) 
      },
      
    selectContent(index:number){
      this.activeContent = index;
    }
    }
  }
