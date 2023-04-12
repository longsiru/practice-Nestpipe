import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
//1.安装joi：install --save nestjs-joi
//2.引入短道：import * as Joi from 'joi';
//3.引入以后创建一个构造方法。来接收实例化UserPipe的时候传过来的schema
//4.进行验证。
//5.去控制器使用这个schema

@Injectable()
export class UserPipe implements PipeTransform {
  private schema;
  constructor(schema) {
    this.schema = schema;
  }
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value); //value就是get和post传过来的值。
    //这个里面可以修改传入的值以及验证传入值的合法性。
    //console.log(error); //undefined //http://localhost:3001/user?name=sayo&age=18
    if (error) {
      return 'success:false'; //success:false  //http://localhost:3001/user?name=sayo&age=xxx
    }
    return value;
  }
}
