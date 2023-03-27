export class Reclamacion {
	constructor(
        public id_rec:number,
        public serie_rec:string,
        public fec_rec:string,
        public suc_rec:string,
        public mail_suc_rec:string,
        public nom_pers_rec:string,
        public dir_pers_rec:string,
        public doc_pers_rec:string,
        public tel_pers_rec:string,
        public mail_pers_rec:string,
        public apoderado_pers_rec:string,
        public tipo_rec:string,
        public comment_rec:string,
        public guia_rec:string,
        public monto_rec:number,
        public det_rec:string,
        public pedido_rec:string        
		){
	}
}