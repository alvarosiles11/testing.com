import org.json.JSONObject;

import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;
import component.grupo;
import component.habitacion;
import component.pais;
import component.ubicacion;

public class Manejador {
    public static void onMessage(JSONObject obj, SSSessionAbstract session) {
        if (session != null) {
            SConsole.log(session.getIdSession(), "\t|\t", obj.getString("component"), obj.getString("type"));
        }
        if (!obj.isNull("component")) {

            switch (obj.getString("component")) {
                case "habitacion":
                    new habitacion(obj, session);
                    break;
                case "pais":
                    new pais(obj, session);
                    break;
                case "grupo":
                    new grupo(obj, session);
                    break;
                case "ubicacion":
                    new ubicacion(obj, session);
                    break;
            }
        }
    }
}
