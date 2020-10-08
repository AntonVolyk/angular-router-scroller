import { ViewportScroller, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router-scroller';

  constructor(private loc: Location, private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
      console.log(e);
      setTimeout(() => {
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
          alert(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
            alert(e.position);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }

  onLocationBack() {
    window.history.back();
  }

  onLocationBackAngular() {
    this.loc.back();
  }
}
