export const sanitizeInput = (input: string) => {

    return input.replace(/<script.*?>.*?<\/script>/gi, '')
                .replace(/<[\/\!]*?[^<>]*?>/gi, '')
                .replace(/<style.*?>.*?<\/style>/gi, '')
                .replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
  };
  
