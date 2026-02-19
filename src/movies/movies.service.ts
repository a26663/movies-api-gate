import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
  ) {}

  async listMovies(): Promise<MovieDto[]> {
    return this.movieRepo.find({ order: { id: 'ASC' } });
  }
  /*async listMovies(): Promise<Movie[]> {
    const movies = await this.movieRepo.find();
    return movies.map((m) => ({ ...m, title: m.title.toUpperCase() }));
  }*/

  /*async listMovies(): Promise<Movie[]> {
    return 'hola' a s any;
  }*/
}
