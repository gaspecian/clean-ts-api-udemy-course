export class ServerError extends Error {
  constructor (stack: string = null) {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
