import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "../logging.service";

@Injectable()
export class AccountsService{

  constructor(private logServ: LoggingService){}

accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated= new EventEmitter<string>();

  addAccount(nam: string, stat: string){
this.accounts.push({name: nam, status: stat});
this.logServ.logStatusChange(status);

  }

  updateStatus(id: number, status: string){
this.accounts[id].status = status;
this.logServ.logStatusChange(status);

  }
}