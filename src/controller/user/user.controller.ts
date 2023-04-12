import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { UserPipe } from 'src/pipes/user/user.pipe';
import * as Joi from 'joi';
//6.@UsePipes()
//7.引入import { UserPipe } from 'src/pipes/user/user.pipe';
//8.在@UsePipes()里面实例化UserPipe ： new UserPipe
//9.定义schema
//10.将定义的userSchema传入@UsePipes(new UserPipe(userSchema))
//11.好处：我们可以定义一个schema，然后用一个管道去验证多个路由。
let userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});
@Controller('user')
export class UserController {
  @Get()
  @UsePipes(new UserPipe(userSchema))
  index(@Query() info) {
    console.log(info);
    //{ name: 'sayo', age: '18' } //http://localhost:3001/user?name=sayo&age=18
    //success:false  //http://localhost:3001/user?name=sayo&age=xxx
    return 'this is a user page';
  }
}
