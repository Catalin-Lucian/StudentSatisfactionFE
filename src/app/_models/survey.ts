export interface Survey{
  id:string,
  name:string,
  startDate:Date,
  endDate:Date,
  questions?:Question[],
  sumitedQuestions?:Question[],
  comments?:Comment[],
  topics?:Topic[]
};

export interface Question{
  id:string,
  surveyId:string,
  questionText:string,
  type:string,
  ratings?:Rating[]
};

export interface Rating{
  id:string,
  questionId:string,
  userId:string,
  points:Number,
  answear:string,
};

export interface SumitedQuestion{
  id:string,
  surveyId:string,
  questionText:string,
}

export interface Comment{
  id:string,
  userId:string,
  surveyId:string,
  commentText:string
}

export interface Topic{
  id:string;
  title:string,
  details:string,
}
