import { SThemeThemes } from "servisofts-component";
import { SSocketProps } from "servisofts-socket";
const SThemeProps: SThemeThemes = {
  default: {
    barStyle: "dark-content",
    barColor: "#ffffff",
    primary: "#ffffff",
    secondary: "#000000",
    background: "#cccccc",
    card: "#00000066"
  },
  dark: {
    barStyle: "light-content",
    barColor: "#000000",
    primary: "#000000",
    secondary: "#ffffff",
    background: "#222222",
    card: "#00000066"
  }
};

const SocketProps: SSocketProps = {
  name: "yoalquilo",
  host: "192.168.3.4",
  ssl: false,
  // host: 'alvaro.ss.lo',
  port: {
    native: 10022,
    web: 20022,
    http: 30022
  },
  cert:
    "MIID2DCCAsCgAwIBAgIEY5PQVTANBgkqhkiG9w0BAQsFADCBrTELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxEjAQBgNVBAsMCXlvYWxxdWlsbzEhMB8GA1UEAwwYeW9hbHF1aWxvLnNlcnZpc29mdHMuY29tMSUwIwYJKoZIhvcNAQkBFhZhbHZhcm9zaWxlczFAZ21haWwuY29tMB4XDTIyMTIxMDAwMTgyOVoXDTIyMTIxMTAwMTgyOVowga0xCzAJBgNVBAYTAkJPMRIwEAYDVQQIDAlBdiBCYW56ZXIxEzARBgNVBAcMClNhbnRhIENydXoxFzAVBgNVBAoMDlNlcnZpc29mdHMgU1JMMRIwEAYDVQQLDAl5b2FscXVpbG8xITAfBgNVBAMMGHlvYWxxdWlsby5zZXJ2aXNvZnRzLmNvbTElMCMGCSqGSIb3DQEJARYWYWx2YXJvc2lsZXMxQGdtYWlsLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAPNVPsgdxdTTjknPhd/098IFYYZfBfJSDkDQCjoDhzK6gbzD+EfZL0zYajdwBAL8SNg+7pJkcw6/wdiDq6H1H0sneT+aSOeKZdiSTM+BdGbcAserVVEnon5AG6nYTlRJHYSru26k8SQrBn0wqog2AXH9wcwOp16KsVTTyRfndtZ7HY8nBihpIMN4n2hVgCTlQxW/6ZzCKvLJuTHoECo/kZJnJs6lH4Q2jxMeKOpcfvCKud3hhGf1FVLy4Y0BRXWJtGO/W87F4wSbq2lWFn0wOnadDkf7u0oL2X5EVxMwEpEpORvmhCgn9PrclbmEECl/hqniCYQnMxAifsnQwWH+Yz8CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAiCxZm83vZCB5Fg7tMTbTHmlj5WzvcperIWja04Nb5IN6TAl/3uqOmB2O4AeyOcz+Uu/AymxFBtEuG3IHeqm0cYkEDK4y7AR7zSgI/Q/0FxFDIC77yP/hqCFUkExvXQIIkTifS02rt0F3a5Pj+7iwy69/Bx34PNVVEO09QdvYatDsHsC+qCDNGAv/EQ/UcRcpe4ilm0yJOTz7bI/1HogPuOCmVm99fsJkjCBTrIRRLss0nxgUUjFfJCiEZPP9BE38GEdGqsUsaVYxoC+Ola6SbeHG9ddNbJLLrSZLhYXACDuIrk9EraXO5GL2CShyNrI9JmCikdBY61zzZCcbL7N3aw==",
  apis: {
    servicio: "http://servicio.ss.lo/http/"
    // rp: "http://192.168.0.21:30016/"
  }
};
export default {
  SocketProps,
  SThemeProps
};
