/*
   Bypassing Certificate Pinning in COSMOTE What's Up 4.7.1 (Android 9)
   Developed by Stavros Mekesis (https://suumcuique.org)
   Refactored for clarity and maintainability.
   https://codeshare.frida.re/@stavros0/cosmote-whatsup-certificate-pinning-bypass/

   Usage:
   $ frida -U -f com.whatsapp.w4b -l <script>
*/

Java.perform(function () {
    console.log("[*] Starting certificate pinning bypass...");

    bypassCertificatePinner();
    bypassConscryptVerification();

    console.log("[*] Certificate pinning bypass applied.");
});

/**
 * Bypasses certificate pinning by overriding the method in class `l.h$a`
 */
function bypassCertificatePinner() {
    try {
        var Pinner = Java.use("l.h$a");
        Pinner.a.overload('java.lang.String', '[Ljava.lang.String;').implementation = function (host, pins) {
            console.log("[+] Bypassing pinning for: " + host);
            return this;
        };
        console.log("[*] CertificatePinner hook installed.");
    } catch (err) {
        console.warn("[!] CertificatePinner class not found, skipping...");
    }
}

/**
 * Disables certificate chain verification in ConscryptFileDescriptorSocket
 */
function bypassConscryptVerification() {
    try {
        var ConscryptSocket = Java.use('com.android.org.conscrypt.ConscryptFileDescriptorSocket');
        ConscryptSocket.verifyCertificateChain.implementation = function (chain, authType) {
            console.log("[+] Skipping certificate chain verification.");
        };
        console.log("[*] ConscryptFileDescriptorSocket hook installed.");
    } catch (err) {
        console.warn("[!] ConscryptFileDescriptorSocket not found, skipping...");
    }
}
