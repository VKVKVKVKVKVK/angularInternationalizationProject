export class Freelance {
  public name: string;
  public job: string;
  public description: string;
  public imagePath: string;
  public tjm: number;


  constructor(name: string, job: string, desc: string, img: string, tjm: number) {
    this.name =  name;
    this.job = job;
    this.description = desc;
    this.imagePath = img;
    this.tjm = tjm;
  }
}