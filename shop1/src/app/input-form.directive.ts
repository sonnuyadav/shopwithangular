import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {

  @HostListener('focus') onFocus(){
    console.log("I am in Focus");
  }

  @HostListener('blur') onBlur(){
    console.log("I am in blur");
  }
  constructor() { }

}
