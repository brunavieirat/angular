export class Vaga{
  constructor(
  public title: string,
  public company: string,
  public salariomax: number,
  public bonificacao: string,
  public VR: boolean,
  public VA: boolean,
  public creche: boolean,
  public dataentry: string,
  public urgencia: boolean,
  public horas: number,
  public horasextra: number,
  public diasviajem: number,
  public overwork: boolean,
  ){}
}