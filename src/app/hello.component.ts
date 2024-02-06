import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {
  pageTitle = 'Page';
  loading = false;

  ngOnInit(): void {
    typeof window !== 'undefined'
      ? window?.localStorage.getItem('firstName')
        ? (document.title =
            this.pageTitle + ' - ' + window?.localStorage.getItem('firstName'))
        : (document.title = this.pageTitle)
      : '';
  }
  firstName = signal(
    typeof window !== 'undefined'
      ? window?.localStorage.getItem('firstName') ?? ''
      : ''
  );
  onChange(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    this.firstName.set(value);
    document.title = `${this.pageTitle} - ${this.firstName()}`;
  }
  saveToLocal(value: string) {
    this.loading = true;
    setTimeout(() => {
      localStorage.setItem('firstName', value);
      this.loading = false;
    }, 2000);
  }
}
