import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {BlockPageService} from "../block-page/block-page.service";

@Component({
  selector: 'app-block-page',
  templateUrl: './block-page.component.html',
  styleUrls: ['./block-page.component.scss']
})
export class BlockPageComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() show: boolean = false;
  @Input('append') append: string = 'body';
  @ViewChild('blockPage') blockPage!: ElementRef;

  constructor(private _blockPageService: BlockPageService) {
    this._blockPageService.blockPageSource$.subscribe({
      next: (show: boolean) => {
        //this.show = show;
        //this.manageBlockPage();
      }
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.append === 'body') {
      if (this.blockPage.nativeElement) {
        if (this.show) {
          this.blockPage.nativeElement.style.display = 'flex';
          document.body.appendChild(this.blockPage.nativeElement);
        }
      }
    }
  }

  ngOnChanges(changes: any): void {
    if (changes.show && !changes.show.firstChange) {
      this.show = changes.show.currentValue;
      this.manageBlockPage();
    }
  }

  private manageBlockPage(): void {
    if (this.show) {
      this.blockPage.nativeElement.style.display = 'flex';
      document.body.appendChild(this.blockPage.nativeElement);
    } else {
      this.blockPage.nativeElement.style.display = 'none';
      this.blockPage.nativeElement.remove();
    }
  }

  ngOnDestroy(): void {
    this.blockPage.nativeElement.style.display = 'none';
    this.blockPage.nativeElement.remove();
  }


}
