import Servisofts.Servisofts;

public class App {
    public static void main(String[] args) throws Exception {
        try {
            Servisofts.Manejador = Manejador::onMessage;
            Servisofts.initialize();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
