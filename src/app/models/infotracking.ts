export class Infotracking {

  static TrackingFromJson(obj:Object){
    // @ts-ignore
    let date = new Date(obj['FECEVENTO']).toISOString().slice(0, 19).replace('T', ' ');
    // new Date().toISOString().slice(0, 19).replace('T', ' ');
    // @ts-ignore
    return new Infotracking(obj['ID'], obj['GUIA'],date ,obj['EVENTO'],obj['COMENTARIO'],obj['REMITENTE'],obj['DESTINATARIO'],obj['DEPORIGEN'],obj['DEPDESTINO'],obj['PAGO']);
  }
  constructor(
    public ID:          number,
    public GUIA:         string,
    public FECEVENTO:      Date,
    public EVENTO: string,
    public COMENTARIO:     string,
    public REMITENTE:         string,
    public DESTINATARIO:          string,
    public DEPORIGEN:         string,
    public DEPDESTINO:        string,
    public PAGO:      string
  ) {}

}
