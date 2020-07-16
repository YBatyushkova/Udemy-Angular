import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core'

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue'
    @Input() dStyles: {border?: string, borderRadius?: string, fontWeight?: string}

    @HostBinding('style.color') elColor = null

    constructor(private el: ElementRef, private r: Renderer2) {
        // this.r.setStyle(this.el.nativeElement, 'color', 'blue ')
        // el.nativeElement.style.color = 'red'
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }
    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color
        // this.r.setStyle(this.el.nativeElement, 'color', this.color)
        // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
    }
    @HostListener('mouseleave') onLeave() {
        this.elColor = null
        // this.r.setStyle(this.el.nativeElement, 'color', null)
        // this.r.setStyle(this.el.nativeElement, 'border', null)
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    }
}