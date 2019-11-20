
export interface servicio{
    id?:number;
    nombre:string;
    descripcion:string;
    estrella:number;
    imagen:string;
    tiposervicios_id:number;
    empresas_id:number;
    created_at?:string;
    updated_at?:string;
}