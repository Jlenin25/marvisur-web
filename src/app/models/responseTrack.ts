export interface Welcome {
  statusCode: number;
  body:       Array<Body[]>;
}

export interface Body {
  ID:           number;
  GUIA:         string;
  FECEVENTO:    Date;
  EVENTO:       string;
  COMENTARIO:   string;
  REMITENTE:    null | string;
  DESTINATARIO: null | string;
  DEPORIGEN:    null | string;
  DEPDESTINO:   null | string;
  PAGO:         string;
}
