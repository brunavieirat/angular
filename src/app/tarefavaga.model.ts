// idtarefavaga
// cert tipo e livel/ fonte
// dev tuple , de tipo/ tempo e tipo de tempo. 
// alem de tempo q aceita treina ele (ficar ruim) aceita worstcase, mas nao orbigarotio.
  // public cert: number,
  // public dev: number,

export class Tarefavaga{
  constructor(
  public vaga: string,
  public title: string,
  public love: boolean,
  public burocratic: boolean,
  public visibility: boolean,
  public indiosincratic: boolean,
  public important: boolean,
  public tempo :number,
  public tempotypeid :number,
  public produtividade :number,
  public produtividadetypeid :number,
  public expiriancerequired: number,
  public expiriancerequiredtypeid: number,
  public expiriancerequireddificulty: number,
  public skillset: number,
  public numbsub: number,
  public sublevel: number,
  public numbpeer: number,
  public peerlevel: number,
  public numbboss: number,
  public bosslevel: number,
  public selfquailitylevel: number,
  public selfleveldirigism: number,
  public conquest: string,

){}
}