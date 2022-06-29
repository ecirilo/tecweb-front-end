export class Bike {
  constructor(
    public id: number | null,
    public nome: string,
    public marca: string,
    public imagem: string | null,
    public imagemTipo: string | null,
    public preco: number,
    public url: string | null) {
  }
}
