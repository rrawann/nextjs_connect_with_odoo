declare module 'odoo-xmlrpc' {
    export class Client {
      constructor(options: { url: string; db: string; username: string; password: string });
      authenticate(): Promise<number>;
      execute_kw(model: string, method: string, args: any[], kwargs: any): Promise<any>;
    }
  }
