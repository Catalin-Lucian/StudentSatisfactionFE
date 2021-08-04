import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbDateService, NbTagInputDirective, NbTagComponent } from '@nebular/theme';
import { Subject } from 'rxjs';
import { SurveyService } from 'src/app/services/survey.service';
import { Topic } from 'src/app/_models/survey';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  completed:boolean=false;
  surveyName:string='';
  surveyId:string|any;
  nrQuestion:number=1;
  minDate:Date=new Date();
  startDate:Date=new Date();
  endDate:Date=new Date();

  @ViewChild(NbTagInputDirective, { read: ElementRef }) tagInput!: ElementRef<HTMLInputElement> ;
  tagsSelected: Set<string> = new Set<string>();
  tagOptions: string[]=[];
  topics!:Topic[];

  submitEventSubject:Subject<string>=new Subject<string>();

  constructor(dateService: NbDateService<Date>,private surveyService:SurveyService,private router:Router) {
    this.minDate=dateService.addDay(this.minDate,-1);
   }

  ngOnInit(): void {
    this.surveyService.getAllTopics().subscribe(topics=>{
      this.topics=topics;
      this.tagOptions=topics.map(topic=>{
        return topic.title;
      })
    })
  }

  handleStartDateChange(event:any){
    this.startDate=event;
  }

  handleEndDateChange(event:any){
    this.endDate=event;
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.tagsSelected.delete(tagToRemove.text);
    this.tagOptions.push(tagToRemove.text);
  }

  onTagAdd(value: string): void {
    if (value) {
      this.tagsSelected.add(value);
      if (!this.tagOptions.includes(value)){
        this.surveyService.postTopic({title:value,details:''}).subscribe();
        this.surveyService.getAllTopics().subscribe(topics=>{
          this.topics=topics;
        })
      }
      this.tagOptions = this.tagOptions.filter(o => o !== value);
    }
    this.tagInput.nativeElement.value = '';
  }

  submitSurvey(){
    this.surveyService.postSurvey({name:this.surveyName,startDate:this.startDate,endDate:this.endDate})
    .subscribe(res=>{
      this.surveyId=res.headers.get('location');
      this.submitEventSubject.next(this.surveyId);

      this.topics.map(topic=>{
        if (this.tagsSelected.has(topic.title)){
          this.surveyService.postTopicSurvey(this.surveyId,topic.id).subscribe()
        }
      })
    })
    this.completed=true;
  }

  onAddQuestion(){
    this.nrQuestion=this.nrQuestion+1;
  }
  counter(i: number) {
    return new Array(i);
  }

}
