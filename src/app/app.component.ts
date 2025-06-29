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
    // This component acts as a passthrough. The 'receivedMovieId' will automatically be passed
    // to the 'selectedMovieId' input of the 'app-ticket-availability' component in the template.
    // No explicit logic is needed here unless you wanted to transform the ID or do other side effects.
    if (changes['receivedMovieId']) {
      console.log(`TicketApp Wrapper received ID: ${changes['receivedMovieId'].currentValue}`);
    }
  }

 
}
