import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  UsePipes,
} from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value); //get或者post传过来的值。 //{ id: '123', age: '18' }//get info
    console.log('-----------this is pipe-----------');
    value.id = '666';
    return value;
  }
}
