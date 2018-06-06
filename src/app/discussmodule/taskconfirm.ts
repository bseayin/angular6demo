export interface TaskConfirm {
    id: number;
    tId: number;
    fId: number;
    isPass: String;
    startTime: Date;
    endTime: Date;
    content: String;
    status:String;
    isUpdateModel:boolean;
  }