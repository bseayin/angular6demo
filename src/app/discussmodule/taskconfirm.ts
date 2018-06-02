export interface TaskConfirm {
    id: number;
    tId: number;
    fId: number;
    isPass: string;
    startTime: Date;
    endTime: Date;
    content: string;
    status:string;
    isUpdateModel:boolean;
  }