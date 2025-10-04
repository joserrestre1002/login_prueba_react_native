import * as SQLite from "expo-sqlite"

let db: SQLite.SQLiteDatabase;

export async function initDB() {
  
  db = await SQLite.openDatabaseAsync("miBD.db")

  await db.execAsync(`
       CREATE TABLE IF NOT EXISTS listaActividadesPrincipales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cod_lote TEXT,
        nom_actividad TEXT,
        cod_actividad TEXT,
        cod_avance TEXT,
        Rendimiento_Aplic  NUMERIC,
        Rendimiento_Tope NUMERIC,
        Rendimiento_Presup NUMERIC,
        salario_jornal_base NUMERIC,
        salario_jornal_extra  NUMERIC,
        Cod_unidad TEXT,
        Nom_unidad TEXT,
        Nom_Corto TEXT
        );
  `);

  console.log('base de datos Creada')
}


export async function hayDatosLocales(){
  const result = await db.getAllAsync<{total:number}>('SELECt COUNT(*) as total FROM   listaActividadesPrincipales');
  console.log(result[0].total)
   return result[0].total > 0;
   
}