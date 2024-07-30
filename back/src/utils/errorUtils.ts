// utils/errorUtils.ts
export class ErrorHandler extends Error {
    constructor(public statusCode: number, public message: string) {
      super();
    }
  }
  
  export const handleError = (error: ErrorHandler, response: any) => {
    const { statusCode, message } = error;
    response.status(statusCode).json({
      status: "error",
      statusCode,
      message
    });
  };