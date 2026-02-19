import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovieDto } from './dto/movie.dto';
/*import { Movie } from './movies.entity';*/

//@ApiTags('movies')
@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @ApiTags('movies')
  @Get()
  @ApiOkResponse({ type: MovieDto, isArray: true })
  async listMovies(): Promise<MovieDto[]> {
    return this.moviesService.listMovies();
  }

  /*async getMovies(): Promise<any> {
        return [{ name: 'Error intencionado' }];
    }*/
  /*async getMovies(): Promise<MovieDto[]> {
    return this.moviesService.listMovies();
  }*/
}
