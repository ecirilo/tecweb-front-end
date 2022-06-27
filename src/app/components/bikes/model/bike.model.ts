export class Bike {
  constructor(
    public id: number | null,
    public nome: string,
    public marca: string,
    public imagem: string | null,
    public preco: number,
    public site: string | null) {
  }
}
