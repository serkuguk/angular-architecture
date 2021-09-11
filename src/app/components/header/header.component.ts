import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core'
import {UserInterface} from '@app/shared/types/backend/types/user-interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() user: UserInterface
  @Input() isAuthorized: boolean
  @Output() signOut = new EventEmitter<void>()

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSignOut() {
    this.signOut.emit()
  }

  onProfileNavigate() {
    const path = this.user ? this.user.uid : 'new'
    this.router.navigate(['/profile', path])
  }
}
