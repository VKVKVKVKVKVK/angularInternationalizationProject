export class Company {
  public name: string;
  public nbEmployees: number;
  public description: string;
  public imagePath: string;



  constructor(name: string, nbEmployees: number, desc: string, img: string) {
    this.name =  name;
    this.nbEmployees = nbEmployees;
    this.description = desc;
    this.imagePath = img;
  }
}