import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { TicketAvailabilityComponent } from "./ticket-availability/ticket-availability.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TicketAvailabilityComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges  {
  title = 'ticketapp';
  // Input to receive the movie ID from the host (shell)
  @Input() receivedMovieId: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['receivedMovieId']) {
      console.log(`TicketApp Wrapper received ID: ${changes['receivedMovieId'].currentValue}`);
    }
  }

 
}
