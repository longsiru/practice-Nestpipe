import { Controller, Get, Query, UsePipes } from '@nestjs/common';
//引入管道
import { NewsPipe } from '../../pipes/news/news.pipe';

//pipe可以修改从get或者post里传过来的数据
@Controller('news')
export class NewsController {
  @Get()
  @UsePipes(new NewsPipe())
  index(@Query() info) {
    console.log(info); //http://localhost:3001/news?id=123&age=18 //{ id: '123', age: '18' }
    return 'this is a news page';
  }
}
