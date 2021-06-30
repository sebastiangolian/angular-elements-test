import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-share-data',
  templateUrl: './share-data.component.html',
  styleUrls: ['./share-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShareDataComponent implements OnInit {
  @Input() info: any = {};
  @Output() message = new EventEmitter();
  userInput: any = '';
  constructor() {}

  ngOnInit() {}

  sendMessage() {
    this.message.emit('Hello ' + this.info.name + ', ' + this.userInput);
  }
}
