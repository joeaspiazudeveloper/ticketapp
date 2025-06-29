import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MovieAvailability {
  id: number;
  title: string;
  imageUrl: string;
  ticketsAvailable: number;
}

@Component({
  selector: 'app-ticket-availability',
  imports: [CommonModule],
  templateUrl: './ticket-availability.component.html',
  styleUrl: './ticket-availability.component.css'
})
export class TicketAvailabilityComponent implements OnInit, OnChanges {
  // Input to receive the selected movie ID from the host
  @Input() selectedMovieId: number | null = null;

  // Local mock data for movie availability (can be fetched from a service in a real app)
  movieAvailabilities: MovieAvailability[] = [
    { id: 1, title: 'El Señor de los Anillos: La Comunidad del Anillo', imageUrl: 'https://placehold.co/300x450/222222/E0BBE4?text=LOTR_Fellowship', ticketsAvailable: 45 },
    { id: 2, title: 'Pulp Fiction', imageUrl: 'https://placehold.co/300x450/000000/F0F3BD?text=Pulp_Fiction', ticketsAvailable: 59 },
    { id: 3, title: 'El Origen', imageUrl: 'https://placehold.co/300x450/444444/957DAD?text=Inception', ticketsAvailable: 60 },
    { id: 4, title: 'Interestelar', imageUrl: 'https://placehold.co/300x450/1A1A1A/A0B9D9?text=Interstellar', ticketsAvailable: 20 },
    { id: 5, title: 'Cadena Perpetua', imageUrl: 'https://placehold.co/300x450/333333/C8F0BD?text=Shawshank', ticketsAvailable: 33 },
    { id: 6, title: 'Parásitos', imageUrl: 'https://placehold.co/300x450/555555/E6E6FA?text=Parasite', ticketsAvailable: 44 },
    { id: 7, title: 'El Señor de los Anillos: El Retorno del Rey', imageUrl: 'https://placehold.co/300x450/666666/FFCC00?text=LOTR_Return', ticketsAvailable: 56 },
  ];

  currentMovieAvailability: MovieAvailability | null = null;

  ngOnInit(): void {
    // Initial check if an ID is provided on load (e.g., from a URL param later)
    if (this.selectedMovieId) {
      this.findMovieAvailability(this.selectedMovieId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // React to changes in the selectedMovieId Input
    if (changes['selectedMovieId'] && changes['selectedMovieId'].currentValue !== undefined) {
      this.findMovieAvailability(changes['selectedMovieId'].currentValue);
    }
  }

  findMovieAvailability(id: number): void {
    this.currentMovieAvailability = this.movieAvailabilities.find(m => m.id === id) || null;
  }
}