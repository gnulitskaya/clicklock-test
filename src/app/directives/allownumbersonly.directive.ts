import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
	selector: '[allownumbersonly]'
})
export class AllownumbersonlyDirective {
	constructor(private el: ElementRef) { }
  //декоратор для обработки событий
  //слушаем input и получаем event
  //метод обработчика onInputChange

	// @HostListener('input', ['$event']) onInputChange(event: any) {
		// const initalValue = this.el.nativeElement.value;
		// this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
		// if (initalValue !== this.el.nativeElement.value) {
		// 	event.stopPropagation();
		// }
	// }
  @HostListener('keypress', ['$event']) validationValue(event: KeyboardEvent): boolean {
    return (event.key >= '0' && event.key <= '9');
  }
}
