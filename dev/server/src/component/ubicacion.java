package component;

import java.util.UUID;

import org.json.JSONArray;
import org.json.JSONObject;

import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SPGConect;

public class ubicacion {

    public final static String component = "ubicacion";

    public ubicacion(JSONObject obj, SSSessionAbstract sesion) {

        switch (obj.getString("type")) {
            case "getAll":
                getAll(obj, sesion);
                break;
            case "registro":
                registro(obj, sesion);
                break;
            case "editar":
                editar(obj, sesion);
                break;
        }
    }

    public void getAll(JSONObject obj, SSSessionAbstract sesion) {
        try {
            String consulta = "select jsonb_object_agg(ubicacion.key, to_json(ubicacion.*)) as json from ubicacion where ubicacion.estado = 1";
            JSONObject data = SPGConect.ejecutarConsultaObject(consulta);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public void registro(JSONObject obj, SSSessionAbstract sesion) {
        try {

            JSONObject data = obj.getJSONObject("data");
            data.put("key", UUID.randomUUID().toString());
            data.put("fecha_on", "now()");
            data.put("estado", 1);

            SPGConect.insertArray("ubicacion", new JSONArray().put(data));

            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public void editar(JSONObject obj, SSSessionAbstract sesion) {
        try {

            JSONObject data = obj.getJSONObject("data");
            SPGConect.editObject("grupo", data);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

}
