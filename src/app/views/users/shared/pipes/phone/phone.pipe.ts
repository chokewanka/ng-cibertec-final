import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): any {

    let countryCode:string = '';
    let countryPhone:string = '';
    let localCode:string = '';
    let phoneType:string = '';
    let barePhone:string = '';

    if (phone.length >= 10){
      countryCode = phone.substr(0,phone.length - 9);
      countryPhone = phone.slice(-9);
    }
    else{
      countryPhone = phone;
    }

    if(countryPhone.length === 9 ){

      if(countryPhone.charAt(0) === '9'){

        phoneType = 'CellPhone';
        barePhone = countryPhone;

      }
      else if(countryPhone.substr(0,2) === '01'){
        
        phoneType = 'FixPhone';
        localCode = '01';
        barePhone = countryPhone.substr(2);

      }
      else{

        phoneType = 'FixPhone';
        localCode = countryPhone.substr(0,3);
        barePhone = countryPhone.substr(3);

      }

    }
    else{

      phoneType = 'FixPhone';

      if(countryPhone.length === 8){

        if(countryPhone.charAt(0) === '1'){

          localCode = '01';
          barePhone = countryPhone.substr(2);

        }
        else{

          localCode = '0' + countryPhone.substr(0,countryPhone.length - 6);
          barePhone = countryPhone.slice(-6);

        }

      }
      else if (countryPhone.length === 7){

        localCode = '01';
        barePhone = countryPhone;

      }
      else if (countryPhone.length === 6){

        barePhone = countryPhone;

      }

    }

    const formattedPhone:string = 
      (countryCode.length?`(${countryCode}) `:'')
      + (phoneType === 'CellPhone'
          ?`${barePhone.substr(0,3)}-${barePhone.substr(3,3)}-${barePhone.substr(6,3)}`
          :(localCode.length?`(${localCode}) `:'') + `${barePhone.substr(0,3)}-${barePhone.substr(3)}`);


    return formattedPhone;

  }

}
