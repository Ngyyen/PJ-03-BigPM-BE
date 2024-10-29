// import {
//   ExceptionFilter,
//   Catch,
//   ArgumentsHost,
//   HttpException,
//   HttpStatus,
// } from '@nestjs/common';
// import { Response } from 'express';

// @Catch()
// export class AllExceptionsFilter implements ExceptionFilter {
//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest();

//     let status = HttpStatus.INTERNAL_SERVER_ERROR;
//     let messages: string[] = ['Internal server error'];

//     // Nếu là lỗi HttpException (bao gồm cả ValidationPipe)
//     if (exception instanceof HttpException) {
//       status = exception.getStatus();
//       const exceptionResponse = exception.getResponse();

//       // Kiểm tra nếu ValidationPipe trả về mảng, giữ nguyên mảng
//       if (
//         exceptionResponse instanceof Object &&
//         Array.isArray(exceptionResponse['message'])
//       ) {
//         messages = exceptionResponse['message'];
//       } else if (typeof exceptionResponse === 'string') {
//         messages = [exceptionResponse]; // Chuyển thông báo chuỗi thành mảng
//       } else if (exceptionResponse instanceof Object) {
//         const message = exceptionResponse['message'] || 'Unknown error';
//         messages = Array.isArray(message) ? message : [message]; // Đảm bảo biến thành mảng
//       }
//     }

//     response.status(status).json({
//       statusCode: status,
//       message: messages, // Luôn trả về mảng
//     });
//   }
// }

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error'; // Mặc định là lỗi server nội bộ

    // Nếu là lỗi HttpException (bao gồm cả ValidationPipe)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      // Kiểm tra nếu ValidationPipe trả về mảng, chuyển thành chuỗi
      if (
        exceptionResponse instanceof Object &&
        Array.isArray(exceptionResponse['message'])
      ) {
        message = exceptionResponse['message'].join(', '); // Ghép các thông báo lỗi thành chuỗi
      } else if (typeof exceptionResponse === 'string') {
        message = exceptionResponse; // Nếu là chuỗi, giữ nguyên
      } else if (exceptionResponse instanceof Object) {
        message = exceptionResponse['message'] || 'Unknown error'; // Xử lý nếu là object nhưng không phải mảng
      }
    }

    // Trả về JSON với lỗi dưới dạng chuỗi
    response.status(status).json({
      statusCode: status,
      message: message, // Trả về chuỗi thay vì mảng
    });
  }
}
