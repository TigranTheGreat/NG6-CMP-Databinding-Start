import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('data') element : { type: string, name: string, content: string };
  @ViewChild('heading') header : ElementRef;
  @ContentChild('contentParagraph') paragraph;

  constructor () {
    console.log('ctor called');
  }

  ngOnChanges (changes : SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit () {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck () {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit () {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy () {
    console.log('ngOnDestroy called');
  }
}
